import enum

class UserRole(str, enum.Enum):
    USER = "USER"
    ADMIN = "ADMIN"
