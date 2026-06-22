from fastapi import FastAPI, UploadFile, File, Form
from fastapi.responses import JSONResponse
import whisper
import tempfile
import os

app = FastAPI(title="Pendo Health Voice API", version="1.0")

print("Loading whisper model medium...")
model = whisper.load_model("medium")
print("Whisper model loaded. Translator ready.")

@app.get("/health")
async def health_check():
    return {"status": "healthy", "whisper_model": "medium"}

@app.post("/stt")
async def speech_to_text(
    file: UploadFile = File(...),
    translate_to: str = Form("en")
):
    try:
        with tempfile.NamedTemporaryFile(delete=False, suffix=".wav") as tmp:
            content = await file.read()
            tmp.write(content)
            tmp_path = tmp.name

        result = model.transcribe(tmp_path, task="transcribe")
        detected_lang = result["language"]
        original_text = result["text"]

        if translate_to != detected_lang and translate_to == "en":
            translation = model.transcribe(tmp_path, task="translate")
            translated_text = translation["text"]
        else:
            translated_text = original_text

        os.unlink(tmp_path)

        return JSONResponse({
            "detected_language": detected_lang,
            "original_text": original_text.strip(),
            "translated_to": translate_to,
            "translated_text": translated_text.strip()
        })

    except Exception as e:
        return JSONResponse(
            status_code=500,
            content={"error": str(e)}
        )