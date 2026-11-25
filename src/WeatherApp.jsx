import { useState } from 'react';
import Header from './components/Header.jsx';
import SearchBar from './components/SearchBar.jsx';
import CurrentWeather from './components/CurrentWeather.jsx';
import HourlyForecast from './components/HourlyForecast.jsx';
import FiveDayForecast from './components/FiveDayForecast.jsx';
import CitySummaries from './components/CitySummaries.jsx';

export default function WeatherApp() {
  const [unit, setUnit] = useState('C');
  return (
    <div className="app-shell" id="top">
      <Header unit={unit} onUnitChange={setUnit} />
      <main className="dashboard">
        <div className="welcome-row"><div><p className="eyebrow">TUESDAY, NOVEMBER 25, 2025</p><h1>Good morning, Alex <span>✦</span></h1><p className="welcome-copy">Here’s your weather update for today.</p></div><SearchBar /></div>
        <CurrentWeather unit={unit} />
        <div className="forecast-grid"><HourlyForecast unit={unit} /><FiveDayForecast unit={unit} /></div>
        <CitySummaries unit={unit} />
        <footer>Weatherly <span>·</span> Sample forecast for preview purposes</footer>
      </main>
    </div>
  );
}
