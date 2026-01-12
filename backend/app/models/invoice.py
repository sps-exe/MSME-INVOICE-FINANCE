from sqlalchemy import Column, Integer, String, Float, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.database import Base
from app.constants.invoice_status import InvoiceStatus

class Invoice(Base):
    __tablename__ = "invoices"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    invoice_number = Column(String, index=True)
    amount = Column(Float)
    buyer_name = Column(String)
    status = Column(String, default=InvoiceStatus.SUBMITTED)
    risk_score = Column(Float, nullable=True)
    decision_reason = Column(String, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    owner = relationship("app.models.user.User")
