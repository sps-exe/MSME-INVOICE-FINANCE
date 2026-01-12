from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def health_check():
    return {
        "status": "healthy",
        "service": "msme-invoice-finance",
        "version": "0.1.0"
    }
