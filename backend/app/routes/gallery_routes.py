from fastapi import APIRouter, HTTPException, UploadFile, File, Form, Depends, status
from bson import ObjectId
from datetime import datetime
from app.database import gallery_collection
from app.middleware.auth_middleware import get_current_admin
from app.utils.cloudinary_service import upload_image, delete_image

router = APIRouter(prefix="/api/gallery", tags=["Gallery"])

def serialize_item(item: dict) -> dict:
    item["_id"] = str(item["_id"])
    return item

@router.get("")
async def get_gallery():
    items = await gallery_collection.find().sort("created_at", -1).to_list(200)
    return [serialize_item(i) for i in items]

@router.post("", status_code=status.HTTP_201_CREATED)
async def upload_gallery_item(
    image: UploadFile = File(...),
    title: str = Form(...),
    description: str = Form(""),
    category: str = Form("Residential"),
    _=Depends(get_current_admin),
):
    if not image.content_type.startswith("image/"):
        raise HTTPException(status_code=400, detail="File must be an image")
    
    file_bytes = await image.read()
    result = upload_image(file_bytes, folder="sak_gallery")
    
    doc = {
        "title": title,
        "description": description,
        "category": category,
        "cloudinaryUrl": result["url"],
        "publicId": result["public_id"],
        "created_at": datetime.utcnow(),
    }
    res = await gallery_collection.insert_one(doc)
    doc["_id"] = str(res.inserted_id)
    return doc

@router.put("/{item_id}")
async def update_gallery_item(
    item_id: str,
    title: str = Form(None),
    description: str = Form(None),
    category: str = Form(None),
    _=Depends(get_current_admin),
):
    update_data = {}
    if title is not None: update_data["title"] = title
    if description is not None: update_data["description"] = description
    if category is not None: update_data["category"] = category
    
    if not update_data:
        raise HTTPException(status_code=400, detail="No fields to update")
    
    res = await gallery_collection.update_one(
        {"_id": ObjectId(item_id)}, {"$set": update_data}
    )
    if res.matched_count == 0:
        raise HTTPException(status_code=404, detail="Item not found")
    return {"message": "Updated successfully"}

@router.delete("/{item_id}")
async def delete_gallery_item(item_id: str, _=Depends(get_current_admin)):
    item = await gallery_collection.find_one({"_id": ObjectId(item_id)})
    if not item:
        raise HTTPException(status_code=404, detail="Item not found")
    
    # Delete from Cloudinary
    if item.get("publicId"):
        delete_image(item["publicId"])
    
    await gallery_collection.delete_one({"_id": ObjectId(item_id)})
    return {"message": "Deleted successfully"}
