from fastapi import APIRouter, HTTPException, status, Depends
from pydantic import BaseModel
from app.database import users_collection
from app.utils.password_handler import verify_password
from app.utils.jwt_handler import create_token
from app.middleware.auth_middleware import get_current_admin

router = APIRouter(prefix="/api/auth", tags=["Auth"])

class LoginRequest(BaseModel):
    username: str
    password: str

@router.post("/login")
async def login(data: LoginRequest):
    user = await users_collection.find_one({"username": data.username})
    if not user or not verify_password(data.password, user["password"]):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")
    
    token = create_token({"sub": user["username"]})
    return {
        "access_token": token,
        "token_type": "bearer",
        "admin": {"username": user["username"]}
    }

@router.get("/me")
async def get_me(current_admin=Depends(get_current_admin)):
    return {"username": current_admin["username"]}
