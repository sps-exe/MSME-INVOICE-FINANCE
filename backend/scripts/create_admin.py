import sys
import os

# Add backend directory to path
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from app.database import SessionLocal
from app.models.user import User
from app.core.security import get_password_hash
from app.constants.user_roles import UserRole

def create_admin_user(email, password):
    db = SessionLocal()
    try:
        existing_user = db.query(User).filter(User.email == email).first()
        if existing_user:
            print(f"User {email} already exists. Updating role to ADMIN.")
            existing_user.role = UserRole.ADMIN
            db.commit()
            return

        new_user = User(
            email=email,
            hashed_password=get_password_hash(password),
            role=UserRole.ADMIN
        )
        db.add(new_user)
        db.commit()
        print(f"Admin user {email} created successfully.")
    except Exception as e:
        print(f"Error creating admin: {e}")
    finally:
        db.close()

if __name__ == "__main__":
    create_admin_user("admin@msme.fi", "admin123")
