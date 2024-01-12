// App.js

import React, { useState } from 'react';
import CurrentWeather from './components/CurrentWeather'; // Update the path based on your project structure
import './App.css'; // Import the CSS file

function App() {
  const [unit, setUnit] = useState('metric'); // Default unit is metric, you can change it if needed

  return (
    <div className="App">
      <h1>Weather App</h1>
      <CurrentWeather unit={unit} setUnit={setUnit} />

      {/* Footer */}
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
    </div>
  );
}

export default App;
