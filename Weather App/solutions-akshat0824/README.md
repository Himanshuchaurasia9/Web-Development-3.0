# Weather App

A simple weather application that allows users to enter a location and fetch real-time weather data using the OpenWeatherMap API. The app displays current weather conditions, including temperature, humidity, wind speed, and a brief description.

## Technologies Used

- **Frontend**: React
- **Backend**: Flask
- **Styling**: Bootstrap
- **API**: OpenWeatherMap

## Features

- Enter a location to get current weather data.
- Displays temperature, humidity, wind speed, and weather description.
- User-friendly interface styled with Bootstrap.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- Python (v3.6 or later)
- Flask
- An OpenWeatherMap API key (sign up at [OpenWeatherMap](https://openweathermap.org/api) to get your API key).

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/akshat0824/weather-app.git
   cd weather-app
   ```

### Set up the Flask backend:

Install the required Python packages:
```bash
pip install Flask requests python-dotenv
```

Navigate back to the root of the project (where package.json is located):
```bash
cd ..
```
Install the required npm packages:
```bash
npm install axios bootstrap
```
Running the Application
Start the Flask backend:
```bash
python app.py  # Make sure you are in the directory where app.py is located.
```
Start the React frontend:
```bash
npm start  # This will run the React app on http://localhost:3000.
```
Open your browser and navigate to http://localhost:3000 to view the application.
Usage
Enter a location (e.g., "London") in the input field.
Click on "Get Weather" to fetch and display the current weather data for that location.
Acknowledgments
OpenWeatherMap for providing weather data.
React for building user interfaces.
Flask for creating web applications in Python.
