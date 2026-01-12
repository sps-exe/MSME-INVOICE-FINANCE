from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.dependencies import get_db, get_current_user
from app.schemas.invoice import InvoiceCreate, InvoiceResponse
from app.services.invoice_service import InvoiceService
from app.models.user import User

router = APIRouter(prefix="/invoices", tags=["Invoices"])

@router.post("/", response_model=InvoiceResponse, status_code=status.HTTP_201_CREATED)
def create_invoice(
    invoice: InvoiceCreate, 
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    service = InvoiceService(db)
    return service.create_invoice(invoice, current_user)

@router.get("/", response_model=List[InvoiceResponse])
def get_invoices(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    service = InvoiceService(db)
    return service.get_invoices(current_user)

@router.get("/{invoice_id}", response_model=InvoiceResponse)
def get_invoice(
    invoice_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    service = InvoiceService(db)
    invoice = service.get_invoice(invoice_id, current_user)
    if not invoice:
        raise HTTPException(status_code=404, detail="Invoice not found")
    return invoice
