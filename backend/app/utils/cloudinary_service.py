import cloudinary
import cloudinary.uploader
from app.config import CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET

cloudinary.config(
    cloud_name=CLOUDINARY_CLOUD_NAME,
    api_key=CLOUDINARY_API_KEY,
    api_secret=CLOUDINARY_API_SECRET,
    secure=True,
)

def upload_image(file_bytes: bytes, folder: str = "sak_gallery") -> dict:
    result = cloudinary.uploader.upload(
        file_bytes,
        folder=folder,
        transformation=[{"quality": "auto", "fetch_format": "auto"}],
    )
    return {"url": result["secure_url"], "public_id": result["public_id"]}

def delete_image(public_id: str) -> bool:
    result = cloudinary.uploader.destroy(public_id)
    return result.get("result") == "ok"
