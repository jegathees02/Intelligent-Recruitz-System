import cv2
import numpy as np
from tensorflow.keras.models import load_model

# Load the pre-trained FER model
model = load_model("/home/jegathees5555/Documents/recruitz/backend/server/FER_model.h5")  # You need to have the model file (fer_model.h5) available

def analyze_boldness_and_confidence(video_path):
    face_cascade = cv2.CascadeClassifier('/home/jegathees5555/Documents/recruitz/backend/server/haarcascade_frontalface_default.xml')

    video_capture = cv2.VideoCapture(video_path)

    confidence_scores = []

    while True:
        ret, frame = video_capture.read()
        if not ret:
            break

        gray_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        faces = face_cascade.detectMultiScale(gray_frame, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

        for (x, y, w, h) in faces:
            face_roi = gray_frame[y:y + h, x:x + w]
            resized_roi = cv2.resize(face_roi, (48, 48))
            normalized_roi = resized_roi / 255.0
            reshaped_roi = np.reshape(normalized_roi, (1, 48, 48, 1))
            emotion_predictions = model.predict(reshaped_roi)
            confidence_score = emotion_predictions[0][3]  # Confidence score for 'happy' emotion

            if 0.75 <= confidence_score < 0.90:
                emotion = "happy"
            elif 0.50 <= confidence_score < 0.75:
                emotion = "neutral"
            else:
                emotion = "sad"

            confidence_scores.append(confidence_score)

    video_capture.release()

    average_confidence = sum(confidence_scores) / len(confidence_scores)
    return average_confidence * 1300 


if __name__ == "__main__":
    video_path = "/home/jegathees5555/Documents/recruitz/backend/video/uploaded_video.webm"  # Replace with the actual path to your .webm video file

    print(f"Analyzing video: {video_path}")

    average_confidence = analyze_boldness_and_confidence(video_path)
    print(f"Average Confidence Score: {average_confidence:.2f}")



# import cv2

# def analyze_confidentiality(video_path):
#     face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

#     video_capture = cv2.VideoCapture(video_path)
#     frame_count = int(video_capture.get(cv2.CAP_PROP_FRAME_COUNT))

#     face_detected_frames = 0

#     while True:  # Keep reading frames until the end of the video
#         ret, frame = video_capture.read()
#         if not ret:
#             break
        
#         gray_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
#         faces = face_cascade.detectMultiScale(gray_frame, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))
        
#         if len(faces) > 0:
#             face_detected_frames += 1

#     video_capture.release()

#     confidentiality_score = face_detected_frames / frame_count
#     return confidentiality_score

# if __name__ == "__main__":
#     video_path = "/home/jegathees5555/Documents/recruitz/backend/server/uploaded_video.webm"  # Replace with the path to your video file
    
#     confidentiality_score = analyze_confidentiality(video_path)
#     print(f"Confidentiality Score: {confidentiality_score:.2f}")
