from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    database_url: str = "sqlite:///./msme_finance_v2.db"
    secret_key: str = "supersecretkey"
    algorithm: str = "HS256"
    access_token_expire_minutes: int = 30

    class Config:
        # env_file = ".env"
        pass

settings = Settings()
