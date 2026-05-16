# SAK Furniture & Interiors — Admin Seed Script
# Run this ONCE to create the admin user in MongoDB
# Usage: python seed_admin.py

import asyncio
import motor.motor_asyncio
from dotenv import load_dotenv
import os
import bcrypt

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")

async def seed():
    client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_URI)
    db = client["website1DB"]
    users = db["users"]

    existing = await users.find_one({"username": "sak"})
    if existing:
        print("Admin user 'sak' already exists. Skipping.")
        return

    hashed = bcrypt.hashpw("password123".encode("utf-8"), bcrypt.gensalt()).decode("utf-8")
    await users.insert_one({
        "username": "sak",
        "password": hashed,
        "role": "admin",
    })
    print("SUCCESS: Admin user created -> username=sak / password=password123")
    client.close()

if __name__ == "__main__":
    asyncio.run(seed())
