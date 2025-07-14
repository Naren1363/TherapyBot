# backend/app.py
from flask import Flask, request, jsonify
from chatbot_response import get_response
from emotion_detector import detect_emotion

app = Flask(__name__)

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    text = data['message']
    emotion = detect_emotion(data.get("audio", None))  # Optional
    reply = get_response(text, emotion)
    return jsonify({'reply': reply, 'emotion': emotion})

if __name__ == '__main__':
    app.run(debug=True)
