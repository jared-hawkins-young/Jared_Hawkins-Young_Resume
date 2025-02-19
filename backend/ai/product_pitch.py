import openai
import os
import logging
from dotenv import load_dotenv
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

# ✅ Load environment variables from .env
load_dotenv()

# ✅ Set up logging
logging.basicConfig(level=logging.DEBUG, format="%(asctime)s - %(levelname)s - %(message)s")

router = APIRouter()

# ✅ Load OpenAI API Key from .env
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
if not OPENAI_API_KEY:
    logging.error("❌ OPENAI_API_KEY is missing! Set it in the backend/.env file.")

# ✅ Ensure OpenAI key is set before making API requests
openai.api_key = OPENAI_API_KEY

# ✅ Define input model
class ProductInput(BaseModel):
    product_name: str
    description: str

def generate_text(description: str, style: str):
    """Generate AI-powered marketing text with detailed logging (Updated for OpenAI v1.0+)."""
    try:
        logging.info(f"📝 Generating {style} marketing text for: {description}")

        # ✅ Ensure API key exists before making a request
        if not OPENAI_API_KEY:
            raise HTTPException(status_code=500, detail="❌ OpenAI API key is missing.")

        prompt = f"Write a {style} marketing copy for the product: {description}"
        logging.debug(f"🛠️ OpenAI API Prompt: {prompt}")

        # ✅ Updated OpenAI request format for v1.0+
        client = openai.OpenAI(api_key=OPENAI_API_KEY)

        response = client.chat.completions.create(
            model="gpt-4-turbo",  # ✅ Ensure this model exists
            messages=[{"role": "system", "content": prompt}]
        )

        logging.info("✅ OpenAI API response received successfully.")
        return response.choices[0].message.content

    except openai.OpenAIError as e:  # ✅ Correct OpenAI error handling
        logging.error(f"⚠️ OpenAI API Error: {e}")
        raise HTTPException(status_code=500, detail=f"OpenAI API Error: {str(e)}")

    except Exception as e:
        logging.error(f"🔥 Unexpected Error: {e}")
        raise HTTPException(status_code=500, detail=f"Unexpected Error: {str(e)}")

@router.post("/generate-product-pitch/")
async def generate_product_pitch(data: ProductInput):
    """API endpoint for generating product pitches with detailed logging."""
    try:
        logging.info(f"🔄 Received request for product: {data.product_name}")

        emotional = generate_text(data.description, "emotional")
        logical = generate_text(data.description, "logical")

        logging.info(f"✅ Successfully generated pitches for {data.product_name}")

        return {"emotional": emotional, "logical": logical}
    except Exception as e:
        logging.error(f"❌ Failed to generate product pitch: {e}")
        raise HTTPException(status_code=500, detail=str(e))