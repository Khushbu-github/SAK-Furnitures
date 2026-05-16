from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import auth_routes, gallery_routes, contact_routes, dashboard_routes

app = FastAPI(
    title="SAK Furniture & Interiors API",
    description="Backend API for SAK Furniture & Interiors website",
    version="1.0.0",
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000", "*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routers
app.include_router(auth_routes.router)
app.include_router(gallery_routes.router)
app.include_router(contact_routes.router)
app.include_router(dashboard_routes.router)

@app.get("/")
def root():
    return {"message": "SAK Furniture & Interiors API is running", "version": "1.0.0"}

@app.get("/health")
def health():
    return {"status": "healthy"}
