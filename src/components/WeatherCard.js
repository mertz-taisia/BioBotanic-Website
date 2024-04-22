import React, {useState, useEffect } from 'react';

function WeatherCard() {
    const [weather, setWeather] = useState({ 
      temp: null,
      date: null,
      icon: null,
      text: null
      });
  
    useEffect(() => {
      const API_URL = 'https://api.weatherapi.com/v1/current.json';
      const API_KEY = '27f166ba239249a1a0005203241704';
      const location = 'Los Angeles'; 
  
      const fetchWeather = async () => {
        try {
          // const response = await fetch(`${API_URL}?key=${API_KEY}&q=${location}`);
          // const data = await response.json();
  
          const data = {
            location: {
              name: 'Los Angeles',
              region: 'California',
              country: 'United States of America',
              lat: 34.05,
              lon: -118.24,
              localtime: '2024-04-16 17:45'
            },
            current: {
              cloud: 0,
              condition: {
                code: 1000,
                icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
                text: "Sunny"
              },
              feelslike_c: 23.3,
              feelslike_f: 74,
              gust_kph: 20.3,
              gust_mph: 12.6,
              humidity: 38,
              is_day: 1,
              last_updated: "2024-04-16 17:45",
              last_updated_epoch: 1713314700,
              precip_in: 0,
              precip_mm: 0,
              pressure_in: 29.98,
              pressure_mb: 1015,
              temp_c: 22.8,
              temp_f: 73,
              uv: 6,
              vis_km: 16,
              vis_miles: 9,
              wind_degree: 237,
              wind_dir: "WSW",
              wind_kph: 3.6,
              wind_mph: 2.2
            }
          };
  
          setWeather({
            temp: data.current.temp_c, 
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

    return (
        <div class="flex w-full h-full bg-white rounded-md p-3">
          <div class="flex flex-col w-1/3 h-full justify-center items-center text-center">
            <div class="text-5xl mt-1">16</div>
            <div class="text-xl mb-1">April</div>
            <svg width="84" height="3" viewBox="0 0 84 3" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="84" height="3" fill="#1D4C43"/>
            </svg>

          </div>
          <div class="flex w-2/3 h-full justify-center items-center text-center">
            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="22" cy="22" r="22" fill="#FFE168"/>
            </svg>
            <div class="flex flex-row">
              <div class="text-5xl ml-4">22</div>
              <div class="flex flex-row items-start">
                <button class="text-blue-500 hover:text-blue-600">°C</button>
                <span class="mx-1 text-gray-400">|</span>
                <button class="text-gray-400 hover:text-gray-500">°F</button>
              </div>
            </div>
          </div>
          
        </div>
    );
}

export default WeatherCard;
