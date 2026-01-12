from pydantic import BaseModel
from datetime import datetime
from app.constants.invoice_status import InvoiceStatus

class InvoiceBase(BaseModel):
    invoice_number: str
    amount: float
    buyer_name: str

class InvoiceCreate(InvoiceBase):
    pass

class InvoiceResponse(InvoiceBase):
    id: int
    user_id: int
    status: InvoiceStatus
    risk_score: float | None = None
    decision_reason: str | None = None
    created_at: datetime

    class Config:
        from_attributes = True
