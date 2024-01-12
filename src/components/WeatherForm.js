import React, { useState, useEffect } from 'react';

function WeatherComponent({ unit, setUnit }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 
  const handleUnitChange = (newUnit) => {
    if (typeof setUnit === 'function') {
      setUnit(newUnit);
    } else {
      console.error('setUnit is not a function or not provided');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data || !data.weather_details) {
    return <div>Error: Invalid data format</div>;
  }

  return (
    <div>
      {data.weather_details.map((locationData) => (
        <div key={locationData.location}>
          <h2>{locationData.location}</h2>
          {/* Render other weather details here based on your needs */}
        </div>
      ))}
    </div>
  );
}

export default WeatherComponent;
