import streamlit as st
from openai import OpenAI
import os

st.set_page_config(page_title="Pendo Health Voice", page_icon="🩺")
st.title("🩺 Pendo Health Voice")
st.caption("Upload WhatsApp voice note → Get transcript")

client = OpenAI(api_key=st.secrets["OPENAI_API_KEY"])

uploaded = st.file_uploader("Upload .ogg, .mp3, .wav", type=["ogg", "mp3", "wav", "m4a"])

if uploaded:
    with st.spinner("Transcribing..."):
        transcript = client.audio.transcriptions.create(
            model="whisper-1", 
            file=uploaded
        )
        st.success("Transcript:")
        st.write(transcript.text)