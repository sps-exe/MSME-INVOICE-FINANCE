from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, JSON
from sqlalchemy.sql import func
from app.database import Base

class InvoiceEvent(Base):
    __tablename__ = "invoice_events"

    id = Column(Integer, primary_key=True, index=True)
    invoice_id = Column(Integer, ForeignKey("invoices.id"), index=True)
    event_type = Column(String) # SUBMITTED, APPROVED, REJECTED
    actor_role = Column(String) # SYSTEM, ADMIN
    metadata_payload = Column(JSON, nullable=True) # Renamed to avoid reserved word conflict if any
    created_at = Column(DateTime(timezone=True), server_default=func.now())
