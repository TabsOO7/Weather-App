const iconSymbols = {
  sun: '☀️',
  cloud: '☁️',
  'sun-cloud': '🌤️',
  rain: '🌦️',
};

export default function WeatherIcon({ type = 'sun-cloud', className = '' }) {
  return <span className={`weather-icon ${className}`} aria-label={type.replace('-', ' ')} role="img">{iconSymbols[type] ?? iconSymbols['sun-cloud']}</span>;
}
