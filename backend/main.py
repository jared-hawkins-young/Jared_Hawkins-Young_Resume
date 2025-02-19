from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from ai.product_pitch import router as product_pitch_router

app = FastAPI()

# CORS settings to allow frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include AI endpoints
app.include_router(product_pitch_router)