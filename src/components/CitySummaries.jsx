import { citySummaries } from '../data/sampleWeather.js';
import WeatherIcon from './WeatherIcon.jsx';
import SectionTitle from './SectionTitle.jsx';

export default function CitySummaries({ unit }) {
  return (
    <section className="cities-section">
      <SectionTitle title="Around the world" subtitle="Weather in other cities" action="View all  ↗" />
      <div className="city-grid">
        {citySummaries.map((city) => <article className="city-card" key={city.city}>
          <div className="city-card-top"><div><h3>{city.city}</h3><p>{city.country}</p></div><WeatherIcon type={city.icon} /></div>
          <div className="city-card-bottom"><div><strong>{city.temperatures[unit]}°</strong><span>{city.condition}</span></div><div className="city-high-low"><span>H: {city.high[unit]}°</span><span>L: {city.low[unit]}°</span></div></div>
        </article>)}
      </div>
    </section>
  );
}
