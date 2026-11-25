// Temporary UI content only. Values are hand-authored examples, not live weather.
export const currentWeather = {
  city: 'San Francisco',
  country: 'United States',
  date: 'Tuesday, November 25',
  condition: 'Partly cloudy',
  temperatures: { C: 18, F: 64 },
  feelsLike: { C: 17, F: 63 },
  high: { C: 21, F: 70 },
  low: { C: 14, F: 57 },
  humidity: 68,
  wind: '12 km/h',
  visibility: '10 km',
  sunrise: '6:42 AM',
};

export const hourlyForecast = [
  { time: 'Now', icon: 'sun-cloud', temperatures: { C: 18, F: 64 }, rain: '10%' },
  { time: '10 AM', icon: 'sun', temperatures: { C: 19, F: 66 }, rain: '0%' },
  { time: '11 AM', icon: 'sun', temperatures: { C: 20, F: 68 }, rain: '0%' },
  { time: '12 PM', icon: 'sun-cloud', temperatures: { C: 21, F: 70 }, rain: '5%' },
  { time: '1 PM', icon: 'cloud', temperatures: { C: 20, F: 68 }, rain: '10%' },
  { time: '2 PM', icon: 'sun-cloud', temperatures: { C: 19, F: 66 }, rain: '10%' },
  { time: '3 PM', icon: 'sun-cloud', temperatures: { C: 18, F: 64 }, rain: '15%' },
  { time: '4 PM', icon: 'cloud', temperatures: { C: 17, F: 63 }, rain: '20%' },
];

export const fiveDayForecast = [
  { day: 'Wed', date: 'Nov 26', icon: 'sun-cloud', condition: 'Partly cloudy', high: { C: 20, F: 68 }, low: { C: 14, F: 57 } },
  { day: 'Thu', date: 'Nov 27', icon: 'sun', condition: 'Sunny', high: { C: 22, F: 72 }, low: { C: 15, F: 59 } },
  { day: 'Fri', date: 'Nov 28', icon: 'rain', condition: 'Light rain', high: { C: 17, F: 63 }, low: { C: 12, F: 54 } },
  { day: 'Sat', date: 'Nov 29', icon: 'cloud', condition: 'Cloudy', high: { C: 18, F: 64 }, low: { C: 13, F: 55 } },
  { day: 'Sun', date: 'Nov 30', icon: 'sun-cloud', condition: 'Partly cloudy', high: { C: 19, F: 66 }, low: { C: 14, F: 57 } },
];

export const citySummaries = [
  { city: 'New York', country: 'United States', icon: 'cloud', condition: 'Cloudy', temperatures: { C: 12, F: 54 }, high: { C: 15, F: 59 }, low: { C: 9, F: 48 } },
  { city: 'London', country: 'United Kingdom', icon: 'rain', condition: 'Light rain', temperatures: { C: 11, F: 52 }, high: { C: 13, F: 55 }, low: { C: 8, F: 46 } },
  { city: 'Tokyo', country: 'Japan', icon: 'sun', condition: 'Sunny', temperatures: { C: 16, F: 61 }, high: { C: 19, F: 66 }, low: { C: 12, F: 54 } },
];
