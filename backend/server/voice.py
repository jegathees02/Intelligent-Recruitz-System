import subprocess
import os

def extract_audio(input_file, output_file):
    command = [
        "ffmpeg",
        "-i", input_file,
        "-y",  # Overwrite output files
        output_file
    ]
    
    subprocess.run(command)

def voice_extraction_main():
    input_file = "/home/jegathees5555/Documents/recruitz/backend/video/uploaded_video.webm"  # Replace with the path to your WebM file
    output_file = "/home/jegathees5555/Documents/recruitz/backend/audio/output.mp3"  # Replace with the desired name for the output MP3 file

    extract_audio(input_file, output_file)

# if __name__ == "__main__":
#     voice_extraction_main()

import librosa
import numpy as np

def analyze_voice_boldness_clarity():
    # Load the audio file using librosa
    audio_path = '/home/jegathees5555/Documents/recruitz/backend/audio/output.mp3'
    y, sr = librosa.load(audio_path)

    # Compute the boldness score (loudness)
    boldness_score = np.mean(np.abs(y))

    # Compute the clarity score
    y_trimmed, _ = librosa.effects.trim(y)
    stft = np.abs(librosa.stft(y_trimmed))
    clarity_score = np.mean(stft) 
    clarity_score = clarity_score * 94/100

    return boldness_score, clarity_score

def analyze_voice_boldness():
    # Load the audio file using librosa
    audio_path = '/home/jegathees5555/Documents/recruitz/backend/audio/output.mp3'
    y, sr = librosa.load(audio_path)

    # Compute the boldness score (loudness)
    boldness_score = np.mean(np.abs(y))

    # Compute the clarity score
    # y_trimmed, _ = librosa.effects.trim(y)
    # stft = np.abs(librosa.stft(y_trimmed))
    # clarity_score = np.mean(stft) 
    # clarity_score = clarity_score * 94/100

    # return  clarity_score * 94/100
    return boldness_score * 1000


def analyze_voice_clarity():
    # Load the audio file using librosa
    audio_path = '/home/jegathees5555/Documents/recruitz/backend/audio/output.mp3'
    y, sr = librosa.load(audio_path)

    # Compute the boldness score (loudness)
    boldness_score = np.mean(np.abs(y))

    # Compute the clarity score
    y_trimmed, _ = librosa.effects.trim(y)
    stft = np.abs(librosa.stft(y_trimmed))
    clarity_score = np.mean(stft) 
    clarity_score = clarity_score * 94/100 * 100

    return  clarity_score

if __name__ == "__main__":
    voice_extraction_main()
    audio_path = "/home/jegathees5555/Documents/recruitz/backend/audio/output.mp3"  # Replace with the path to your MP3 audio file

    boldness_score, clarity_score = analyze_voice_boldness_clarity()
    print(f"Boldness Score: {boldness_score:.2f}")
    print(f"Clarity Score: {clarity_score:.2f}")

