from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import whisper
import tempfile
import os

app = FastAPI(title="Pendo Health Voice")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

print("Loading Whisper model...")
model = whisper.load_model("small")
print("Whisper model loaded.")

@app.get("/")
def read_root():
    return {"message": "Pendo Health Voice API running"}

@app.post("/stt")
async def speech_to_text(file: UploadFile = File(...)):
    try:
        # Save upload to temp file first
        with tempfile.NamedTemporaryFile(delete=False, suffix=".mp4") as tmp:
            contents = await file.read()
            tmp.write(contents)
            tmp_path = tmp.name
        
        # Transcribe
        result = model.transcribe(tmp_path)
        transcript = result["text"]
        
        # Rule #9: Delete audio immediately
        os.unlink(tmp_path)
        
        return {
            "transcript": transcript,
            "status": "success",
            "safety_check": "Audio deleted per Rule #9"
        }
    
    except Exception as e:
        return {"error": str(e), "status": "failed"}