from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.dependencies import get_db, require_admin, get_current_user
from app.services.invoice_service import InvoiceService
from app.models.user import User
from app.schemas.invoice import InvoiceResponse
from app.schemas.admin import AdminDecision
from app.constants.invoice_status import InvoiceStatus

router = APIRouter(
    prefix="/admin",
    tags=["admin"],
    dependencies=[Depends(require_admin)]
)

@router.get("/invoices", response_model=list[InvoiceResponse])
def get_submitted_invoices(status: str = "SUBMITTED", db: Session = Depends(get_db)):
    service = InvoiceService(db)
    return service.get_invoices_by_status(status)

@router.patch("/invoices/{invoice_id}/decision", response_model=InvoiceResponse)
def admin_invoice_decision(
    invoice_id: int, 
    decision_payload: AdminDecision,
    db: Session = Depends(get_db)
):
    service = InvoiceService(db)
    invoice = service.get_invoice(invoice_id)
    if not invoice:
        raise HTTPException(status_code=404, detail="Invoice not found")
    
    # decision_payload.decision is Enum (APPROVED/REJECTED)
    updated_invoice = service.process_admin_decision(
        invoice, 
        decision_payload.decision, 
        decision_payload.risk_score, 
        decision_payload.decision_note
    )
    return updated_invoice
