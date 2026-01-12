# MSME Invoice Financing Platform (MVP)

A fintech-grade React + FastAPI application for managing invoice financing, featuring automated risk scoring, an underwriting console, and a slick, modern UI.

## 🚀 Features

### Public Portal
- **User Authentication**: Secure Signup/Login (JWT).
- **Invoice Management**: Submit invoices for financing.
- **Real-time Status**: Track approval status (Submitted, Approved, Rejected).
- **Interactive Dashboard**: View invoice history and risk scores.

### Admin Underwriting Console
- **Dedicated Admin Login**: Secure access for underwriters.
- **Review Queue**: View all `SUBMITTED` invoices.
- **Decision Engine**: Approve or Reject invoices with notes.
- **Risk Override**: Manually adjust risk scores.
- **Optimistic UI**: Fast, responsive updates.

## 🛠 Tech Stack

### Frontend
- **React 18**: Component-based UI.
- **Tailwind CSS**: Modern utility-first styling.
- **React Router v6**: Client-side routing with protected routes.
- **Axios**: API integration with interceptors.

### Backend
- **FastAPI**: High-performance Python web framework.
- **SQLAlchemy + SQLite**: ORM and database.
- **Pydantic**: Data validation.
- **JWT**: Secure token-based authentication.

## 🏁 Getting Started

### Prerequisites
- Node.js (v18+)
- Python (v3.9+)

### 1. Backend Setup

```bash
cd backend

# Create virtual environment
python3 -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
pip install "bcrypt==4.0.1" # Ensure correct version for passlib

# Run the server
python3 -m uvicorn app.main:app --reload
```

The server will start at `http://127.0.0.1:8000`.
- **Swagger Docs**: `http://127.0.0.1:8000/docs`

### 2. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Start the dev server
npm start
```

The app will run at `http://localhost:3000`.

## 🔐 Credentials (Demo)

### Admin User
- **Email**: `admin@msme.fi`
- **Password**: `admin123`
- *Note: This user is auto-seeded by running `python3 scripts/create_admin.py` or mostly on first run if configured.*

### Standard User
- Sign up with any email (e.g., `user@example.com`).

## 🧪 Architecture

```
msme-invoice-finance/
├── backend/
│   ├── app/
│   │   ├── models/       # SQLAlchemy Models
│   │   ├── routes/       # API Routes (auth, invoices, admin)
│   │   ├── services/     # Business Logic
│   │   └── main.py       # Entry point
│   ├── scripts/          # Utility scripts (create_admin)
│   └── msme_finance_v2.db # SQLite Database
└── frontend/
    ├── src/
    │   ├── api/          # Axios setup & endpoints
    │   ├── components/   # UI Components (Navbar, Layout)
    │   ├── context/      # Auth State
    │   ├── pages/        # Views (Dashboard, Login, Admin)
    │   └── ui/           # Design system elements
```

## 🛡️ Decisions & Logic

- **Risk Scoring**: Currently utilizes a rule-based engine (MVP). Invoices < $10k are auto-approved for demo purposes (configurable).
- **Security**: All protected routes require a valid Bearer token. Admin routes enforce role checks.

## 📜 License

MIT
