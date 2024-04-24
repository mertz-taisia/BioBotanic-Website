import React, { useState, useEffect } from 'react';

function WeatherCard() {
    const [weather, setWeather] = useState({ 
      tempC: null,  // Store Celsius temperature
      tempF: null,  // Store Fahrenheit temperature
      date: null,
      icon: null,
      text: null
    });
    const [unit, setUnit] = useState('C');  // State to track temperature unit

    useEffect(() => {
      const API_URL = 'https://api.weatherapi.com/v1/current.json';
      const API_KEY = '27f166ba239249a1a0005203241704';
      const location = 'Los Angeles'; 

      const fetchWeather = async () => {
        try {
          const response = await fetch(`${API_URL}?key=${API_KEY}&q=${location}`);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setWeather({
            tempC: data.current.temp_c, 
            tempF: data.current.temp_f,
            date: new Date(data.location.localtime),
            icon: `https:${data.current.condition.icon}`, 
            text: data.current.condition.text
          });
        } catch (error) {
          console.error('Error fetching weather data:', error);
        }
      };

      fetchWeather();
    }, []);

    const formatDate = (date) => {
      if (!date) return '';
      const options = { month: 'long', day: 'numeric' };
      return new Intl.DateTimeFormat('en-US', options).format(date);
    };

    const handleUnitChange = (newUnit) => {
      setUnit(newUnit);
    };

    const displayTemperature = () => {
      return unit === 'C' ? weather.tempC : weather.tempF;
    };

    return (
        <div className="flex w-full h-full bg-white rounded-md p-3">
          <div className="flex flex-col w-1/3 h-full justify-center items-center text-center">
            <div className="text-5xl mt-1">{formatDate(weather.date).split(' ')[1]}</div>
            <div className="text-xl mb-1">{formatDate(weather.date).split(' ')[0]}</div>
            <svg width="84" height="3" viewBox="0 0 84 3" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="84" height="3" fill="#1D4C43"/>
            </svg>
          </div>
          <div className="flex w-2/3 h-full justify-center items-center text-center">
            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="22" cy="22" r="22" fill="#FFE168"/>
            </svg>
            <div className="flex flex-row">
              <div className="text-5xl ml-4">{displayTemperature()}</div>
              <div className="flex flex-row items-start">
                <button className="text-blue-500 hover:text-blue-600" onClick={() => handleUnitChange('C')}>°C</button>
                <span className="mx-1 text-gray-400">|</span>
                <button className="text-gray-400 hover:text-gray-500" onClick={() => handleUnitChange('F')}>°F</button>
              </div>
            </div>
          </div>
          
        </div>
    );
}

export default WeatherCard;
