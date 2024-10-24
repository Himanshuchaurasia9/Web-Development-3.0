import os
from flask import Flask, request, jsonify
import requests
from dotenv import load_dotenv
from flask_cors import CORS  # Import CORS

load_dotenv()  # Load environment variables from .env file

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

API_KEY = os.getenv('OPENWEATHER_API_KEY')  # Get API key from environment variable


@app.route('/weather', methods=['GET'])
def get_weather():
    location = request.args.get('location')
    if not location:
        return jsonify({'error': 'Location is required!'}), 400

    url = f"http://api.openweathermap.org/data/2.5/weather?q={location}&appid={API_KEY}&units=metric"

    response = requests.get(url)

    if response.status_code != 200:
        return jsonify({'error': 'Invalid location or API request failed!'}), response.status_code

    data = response.json()
    weather_info = {
        'temperature': data['main']['temp'],
        'humidity': data['main']['humidity'],
        'wind_speed': data['wind']['speed'],
        'description': data['weather'][0]['description']
    }

    return jsonify(weather_info)


if __name__ == '__main__':
    app.run(debug=True)