import { fiveDayForecast } from '../data/sampleWeather.js';
import WeatherIcon from './WeatherIcon.jsx';
import SectionTitle from './SectionTitle.jsx';

export default function FiveDayForecast({ unit }) {
  return (
    <section className="panel five-day-panel">
      <SectionTitle title="5-day forecast" subtitle="The week ahead" action="⌑" />
      <div className="day-list">
        {fiveDayForecast.map((day) => <div className="day-row" key={day.day}>
          <div className="day-name"><strong>{day.day}</strong><span>{day.date}</span></div>
          <WeatherIcon type={day.icon} /><span className="day-condition">{day.condition}</span>
          <div className="day-range"><strong>{day.high[unit]}°</strong><span>{day.low[unit]}°</span></div>
        </div>)}
      </div>
    </section>
  );
}
