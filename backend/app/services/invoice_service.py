from sqlalchemy.orm import Session
from app.models.invoice import Invoice
from app.schemas.invoice import InvoiceCreate
from app.models.user import User
from app.constants.invoice_status import InvoiceStatus

class InvoiceService:
    def __init__(self, db: Session):
        self.db = db

    def create_invoice(self, invoice: InvoiceCreate, user: User):
        new_invoice = Invoice(
            user_id=user.id,
            invoice_number=invoice.invoice_number,
            amount=invoice.amount,
            buyer_name=invoice.buyer_name,
            status=InvoiceStatus.SUBMITTED
        )
        self.db.add(new_invoice)
        self.db.commit()
        self.db.refresh(new_invoice)

        self.log_event(new_invoice.id, "SUBMITTED", "USER", {})

        # MVP Logic: Auto-move to APPROVED if amount < 10000 (Placeholder logic)
        self._auto_decision(new_invoice)
        
        return new_invoice

    def _auto_decision(self, invoice: Invoice):
        if invoice.amount < 10000:
             invoice.status = InvoiceStatus.APPROVED
             invoice.decision_reason = "Auto-approved: Low amount"
             invoice.risk_score = 10.0
             self.log_event(invoice.id, "AUTO_APPROVED", "SYSTEM", {"reason": "Low amount"})
        else:
             invoice.risk_score = 50.0 # Pending manual review
        
        self.db.commit()
        self.db.refresh(invoice)

    def get_invoices(self, user: User):
        return self.db.query(Invoice).filter(Invoice.user_id == user.id).all()

    def get_invoice(self, invoice_id: int):
        return self.db.query(Invoice).filter(Invoice.id == invoice_id).first()

    def get_invoices_by_status(self, status: str):
        return self.db.query(Invoice).filter(Invoice.status == status).all()

    def process_admin_decision(self, invoice: Invoice, status: InvoiceStatus, risk_score: float | None, note: str | None):
        previous_status = invoice.status
        invoice.status = status
        if risk_score is not None:
             invoice.risk_score = risk_score
        if note:
             invoice.decision_reason = note
        
        self.db.commit()
        self.db.refresh(invoice)
        
        self.log_event(invoice.id, f"ADMIN_{status}", "ADMIN", {"previous_status": previous_status, "note": note, "risk_score": risk_score})
        return invoice

    def log_event(self, invoice_id: int, event_type: str, actor_role: str, metadata: dict = None):
        from app.models.invoice_event import InvoiceEvent
        event = InvoiceEvent(
            invoice_id=invoice_id,
            event_type=event_type,
            actor_role=actor_role,
            metadata_payload=metadata
        )
        self.db.add(event)
        self.db.commit()
