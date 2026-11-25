import { hourlyForecast } from '../data/sampleWeather.js';
import WeatherIcon from './WeatherIcon.jsx';
import SectionTitle from './SectionTitle.jsx';

export default function HourlyForecast({ unit }) {
  return (
    <section className="panel hourly-panel">
      <SectionTitle title="Next 24 hours" subtitle="Hourly forecast" action="Next 24h  ˅" />
      <div className="hourly-list">
        {hourlyForecast.map((hour) => <div className="hour-item" key={hour.time}>
          <span className="hour-time">{hour.time}</span><WeatherIcon type={hour.icon} />
          <strong>{hour.temperatures[unit]}°</strong><span className="rain-chance">☂ {hour.rain}</span>
        </div>)}
      </div>
    </section>
  );
}
