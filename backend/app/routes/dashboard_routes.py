from fastapi import APIRouter, Depends
from app.database import gallery_collection, contacts_collection
from app.middleware.auth_middleware import get_current_admin

router = APIRouter(prefix="/api/dashboard", tags=["Dashboard"])

@router.get("/stats")
async def get_stats(_=Depends(get_current_admin)):
    gallery_count = await gallery_collection.count_documents({})
    contact_count = await contacts_collection.count_documents({})
    unread_count = await contacts_collection.count_documents({"is_read": False})
    return {
        "gallery_count": gallery_count,
        "contact_count": contact_count,
        "unread_count": unread_count,
    }
