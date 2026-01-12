from pydantic import BaseModel
from app.constants.invoice_status import InvoiceStatus

class AdminDecision(BaseModel):
    decision: InvoiceStatus # APPROVED or REJECTED
    risk_score: float | None = None
    decision_note: str | None = None
