import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherAPI = () => {
  const [weatherData, setWeatherData] = useState(null);
  const weatherApiKey = 'YOUR_API_KEY';


  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        // Get user's location
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(async (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            // Fetch weather data based on latitude and longitude
            const response = await axios.get(
              `https://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${latitude},${longitude}&aqi=no`
            );

            setWeatherData(response.data);
          });
        } else {
          console.error('Geolocation is not supported by this browser.');
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, [weatherApiKey]);

  if (!weatherData) {
    return <p>Loading weather...</p>;
  }

  return (
    <div>
      <p>{weatherData.location.name}, {weatherData.location.country}</p>
      <p>{weatherData.current.temp_c}°C</p>
      <p>{weatherData.current.condition.text}</p>
    </div>
  );
};

export default WeatherAPI;
