import whisper
import os
from fastapi import UploadFile

# Load Whisper once on startup. large-v3 is best for Sheng/Swahili/Luo
print("Loading Whisper model...")
model = whisper.load_model("large-v3")  # First run downloads ~3GB. Be patient.
print("Whisper model loaded.")

async def transcribe_audio(file: UploadFile) -> str:
    """
    Takes WhatsApp .ogg voice note, saves temp, transcribes with Whisper, deletes temp.
    Returns text transcript for RAG pipeline.
    """
    temp_path = f"app/data/temp_{file.filename}"
    
    # 1. Save uploaded audio temporarily
    with open(temp_path, "wb") as buffer:
        content = await file.read()
        buffer.write(content)
    
    # 2. Transcribe. language=None = auto-detect Sheng/Swahili/Luo/English
    result = model.transcribe(temp_path, language=None, fp16=False) 
    transcript = result["text"].strip()
    
    # 3. Rule #9 Data Minimization: Delete audio immediately
    os.remove(temp_path)
    
    return transcript