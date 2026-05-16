import motor.motor_asyncio
from app.config import MONGO_URI

client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_URI)
db = client["website1DB"]

users_collection = db["users"]
gallery_collection = db["gallery"]
contacts_collection = db["contacts"]
