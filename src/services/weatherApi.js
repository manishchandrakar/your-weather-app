// import { fetchData } from './apiUtils'; // Update the path based on your project structure

import data from './dummyWeatherData.json';
const BASE_URL = 'dummyWeatherData';

const buildApiUrl = (type, city, unit, forecastDays) => {
  // Construct the full URL using the base URL and endpoint
  const endpoint = '/dummyWeatherData.json'; // Change this to your actual endpoint
  return `${BASE_URL}${endpoint}`;
};

export const getCurrentWeather = async (city, unit) => {
  try {
    console.log(data);
    // const data = await fetchData(buildApiUrl('current', city, unit));
    return data;
  } catch (error) {
    console.error('Error fetching current weather data:', error);
    throw error;
  }
};
