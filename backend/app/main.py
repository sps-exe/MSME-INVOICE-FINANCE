from fastapi import FastAPI
from app.routes.health import router as health_router
from app.routes.auth import router as auth_router
from app.routes.invoices import router as invoices_router
from app.routes.admin import router as admin_router
from app.database import Base, engine
# Import models to register them with Base
import app.models.user
import app.models.invoice
import app.models.invoice_event

# Create tables on startup (Synchronous)
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="MSME Invoice Finance API",
    version="0.1.0",
    docs_url="/docs",
    redoc_url="/redoc"
)

from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routers
app.include_router(health_router, prefix="/health")
app.include_router(auth_router)
app.include_router(invoices_router)
app.include_router(admin_router)

@app.get("/")
def root():
    return {"status": "ok", "message": "MSME Invoice Finance API running"}
