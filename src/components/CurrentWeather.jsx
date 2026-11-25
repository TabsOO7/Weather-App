import { currentWeather } from '../data/sampleWeather.js';
import WeatherIcon from './WeatherIcon.jsx';

export default function CurrentWeather({ unit }) {
  const weather = currentWeather;
  return (
    <section className="current-card" aria-labelledby="current-title">
      <div className="current-topline"><span className="eyebrow">CURRENT WEATHER</span><span className="updated"><span /> Updated just now</span></div>
      <div className="current-main">
        <div className="place-block">
          <div className="location"><span aria-hidden="true">⌖</span><h1 id="current-title">{weather.city}</h1><span className="pin">⌄</span></div>
          <p className="country">{weather.country}</p>
          <p className="date-line">{weather.date} <span>·</span> 9:41 AM</p>
        </div>
        <div className="temperature-block"><WeatherIcon type="sun-cloud" className="hero-icon"/><div><div className="temperature">{weather.temperatures[unit]}<span>°{unit}</span></div><p>{weather.condition}</p></div></div>
      </div>
      <div className="current-bottom">
        <div className="feels-like"><span>Feels like</span><strong>{weather.feelsLike[unit]}°</strong></div>
        <div className="high-low"><span>H:<b>{weather.high[unit]}°</b></span><span>L:<b>{weather.low[unit]}°</b></span></div>
        <div className="metric-list">
          <div><span className="metric-icon">◌</span><span>Humidity</span><strong>{weather.humidity}%</strong></div>
          <div><span className="metric-icon">≋</span><span>Wind</span><strong>{weather.wind}</strong></div>
          <div><span className="metric-icon">◉</span><span>Visibility</span><strong>{weather.visibility}</strong></div>
        </div>
      </div>
    </section>
  );
}
