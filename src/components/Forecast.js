import React from 'react';

function Forecast({ data, unit }) {
  // Add checks for undefined data or data.forecast
  if (!data || !data.forecast) {
    return <div>Error: Invalid data format</div>;
  }

  const forecastList = data.forecast.map((day, index) => (
    <div key={index} className="forecast-item">
      <p>Date: {day.date}</p>
      <p>Average Temperature: {day.avg_temperature} {unit === 'metric' ? '°C' : '°F'}</p>
      <img src={day.weather_icon} alt={day.weather_description} />
      <p>Weather: {day.weather_description}</p>
    </div>
  ));

  return (
    <div className="forecast-container">
      <h2>5-Day Forecast for {data.location.name}, {data.location.region}, {data.location.country}</h2>
      {forecastList}
    </div>
  );
}

export default Forecast;
