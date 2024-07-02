// src/components/ExchangeRateTracker/ExchangeRateTracker.Component.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherAPI from '../Weather/WeatherAPI.Component';

const ExchangeRateTracker = () => {
  const [dateTime, setDateTime] = useState('');
  const [usdToInrRate, setUsdToInrRate] = useState('');
  const [euroToInrRate, setEuroToInrRate] = useState('');
  const apiKey = 'YOUR_API_KEY';

  useEffect(() => {
    // Fetch current date and time
    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();
    setDateTime(`${currentDate} ${currentTime}`);

    // Fetch USD to INR exchange rate
    const fetchUsdToInrRate = async () => {
      try {
        const response = await axios.get(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/USD/INR`);
        setUsdToInrRate(response.data.conversion_rate.toFixed(2));
      } catch (error) {
        console.log('Error fetching USD to INR exchange rate:', error);
      }
    };

    // Fetch Euro to INR exchange rate
    const fetchEuroToInrRate = async () => {
      try {
        const response = await axios.get(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/EUR/INR`);
        setEuroToInrRate(response.data.conversion_rate.toFixed(2));
      } catch (error) {
        console.log('Error fetching Euro to INR exchange rate:', error);
      }
    };

    fetchUsdToInrRate();
    fetchEuroToInrRate();
  }, [apiKey]);

  return (
    <div className="flex flex-wrap justify-center gap-4">
      <div className="card bg-white shadow-md rounded-lg p-4 mb-4" style={{ width: '250px' }}>
        <p className="text-base font-bold mb-2">{getGreeting()}</p>
        <p className="text-sm">{dateTime}</p>
      </div>

      <div className="card bg-white shadow-md rounded-lg p-4 mb-4" style={{ width: '250px' }}>
        <p className="text-base font-bold mb-2">Weather</p>
        <WeatherAPI />
      </div>

      <div className="card bg-white shadow-md rounded-lg p-4 mb-4" style={{ width: '250px' }}>
        <p className="text-base font-bold mb-2">USD/INR</p>
        <p className="text-sm">Current rate: {usdToInrRate}</p>
      </div>

      <div className="card bg-white shadow-md rounded-lg p-4 mb-4" style={{ width: '250px' }}>
        <p className="text-base font-bold mb-2">EUR/INR</p>
        <p className="text-sm">Current rate: {euroToInrRate}</p>
      </div>
    </div>
  );
};

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return 'Good Morning';
  else if (hour >= 12 && hour < 18) return 'Good Afternoon';
  else return 'Good Evening';
};

export default ExchangeRateTracker;
