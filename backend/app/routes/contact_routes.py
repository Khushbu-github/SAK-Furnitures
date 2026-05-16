from fastapi import APIRouter, status
from pydantic import BaseModel
from datetime import datetime
from app.database import contacts_collection
from app.middleware.auth_middleware import get_current_admin
from fastapi import Depends
from bson import ObjectId

router = APIRouter(prefix="/api/contact", tags=["Contact"])

class ContactForm(BaseModel):
    name: str
    phone: str
    message: str

def serialize(c: dict) -> dict:
    c["_id"] = str(c["_id"])
    return c

@router.post("", status_code=status.HTTP_201_CREATED)
async def submit_contact(form: ContactForm):
    doc = {
        "name": form.name.strip(),
        "phone": form.phone.strip(),
        "message": form.message.strip(),
        "is_read": False,
        "created_at": datetime.utcnow(),
    }
    res = await contacts_collection.insert_one(doc)
    doc["_id"] = str(res.inserted_id)
    return {"message": "Message received! We'll contact you soon.", "id": doc["_id"]}

@router.get("")
async def get_contacts(_=Depends(get_current_admin)):
    items = await contacts_collection.find().sort("created_at", -1).to_list(500)
    return [serialize(i) for i in items]

@router.put("/{contact_id}/read")
async def mark_read(contact_id: str, _=Depends(get_current_admin)):
    item = await contacts_collection.find_one({"_id": ObjectId(contact_id)})
    if not item:
        from fastapi import HTTPException
        raise HTTPException(status_code=404, detail="Not found")
    new_val = not item.get("is_read", False)
    await contacts_collection.update_one({"_id": ObjectId(contact_id)}, {"$set": {"is_read": new_val}})
    return {"message": "Updated"}

@router.delete("/{contact_id}")
async def delete_contact(contact_id: str, _=Depends(get_current_admin)):
    await contacts_collection.delete_one({"_id": ObjectId(contact_id)})
    return {"message": "Deleted"}
