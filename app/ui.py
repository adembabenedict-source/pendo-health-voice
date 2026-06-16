import streamlit as st
import requests

st.set_page_config(page_title="Pendo Health Voice", page_icon="🩺")
st.title("🩺 Pendo Health Voice")
st.caption("Upload WhatsApp voice note → Get transcript. Audio deleted instantly.")

uploaded = st.file_uploader("Upload .ogg, .mp3, .wav", type=["ogg", "mp3", "wav", "m4a"])

if uploaded:
    with st.spinner("Transcribing..."):
        files = {"file": (uploaded.name, uploaded.getvalue())}
        try:
            res = requests.post("http://localhost:8000/transcribe", files=files, timeout=60)
            if res.status_code == 200:
                st.success("Transcript:")
                st.write(res.json()["text"])
            else:
                st.error(f"Error: {res.json().get('detail', 'Unknown error')}")
        except Exception as e:
            st.error("FastAPI not running. Start it with: uvicorn app.main:app --reload")