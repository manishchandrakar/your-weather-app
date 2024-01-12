// CurrentWeather.js

import React, { useState, useEffect } from 'react';
import { getCurrentWeather } from '../services/weatherApi';
import './styles.css'; // Import the CSS file

const CurrentWeather = ({ unit, setUnit }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const weatherData = await getCurrentWeather('YourCity', unit); // Replace 'YourCity' with the actual city name
        setData(weatherData);
      } catch (error) {
        setError('Error fetching weather data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [unit]);

  const handleUnitChange = (newUnit) => {
    if (typeof setUnit === 'function') {
      setUnit(newUnit);
    } else {
      console.error('setUnit is not a function or not provided');
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }
  if (!data || !data.weather_details || data.weather_details.length === 0) {
    return <div className="error">Error: Invalid data format</div>;
  }

<footer>
        <p className='Name'>
          Designed and Developed by{' '}
          <a  href="https://www.linkedin.com/in/manish-chandrakar-23392b183/" target="_blank" rel="noopener noreferrer">
            Manish Chandrakar
          </a>
        </p>
        <p className='Name'>
          Check out the code on{' '}
          <a  href="https://github.com/manishchandrakar/" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </p>
      </footer>


  return (
    <div className="current-weather-container">
      {data.weather_details.map((locationData) => {
        const {
          location,
          current: {
            observation_time,
            temperature,
            weather_icons,
            weather_descriptions,
            wind_speed,
            wind_dir,
            pressure,
            precip,
            humidity,
            cloudcover,
            feelslike,
            uv_index,
            visibility,
            is_day,
          },
        } = locationData;

        // Unit conversion
        const convertedTemperature = unit === 'imperial' ? (temperature * 9) / 5 + 32 : temperature;
        const temperatureUnit = unit === 'imperial' ? '°F' : '°C';
        const windSpeedUnit = unit === 'imperial' ? 'mph' : 'm/s';

        return (
          <div key={location} className="location-container">
            <div className="weather-heading">
              <h2>Current Weather in {location}</h2>
            </div>
            <div className="weather-details">
              <p>Observation Time: {observation_time}</p>
              <p>Temperature: {convertedTemperature} {temperatureUnit}</p>
              <p>Weather: {weather_descriptions.join(', ')}</p>
              <p>Wind Speed: {wind_speed} {windSpeedUnit}</p>
              {/* Add other weather details here */}
            </div>
            
          </div>
          
        );
      })}
    </div>
  );
};

export default CurrentWeather;
