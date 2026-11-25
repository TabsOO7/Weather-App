# Weatherly

A responsive React and Vite weather dashboard. The current conditions, hourly forecast, five-day forecast, and city cards use clearly labeled temporary sample data. Search is presentation-only; there is no weather API, live city lookup, or backend in this Day 1 version.

## Run locally

```sh
npm install
npm run dev
```

Create a production build with `npm run build`.

## Project structure

- `src/WeatherApp.jsx` — page composition and the Celsius/Fahrenheit display selection.
- `src/components/` — reusable header, search, current conditions, forecasts, city cards, and section title components.
- `src/data/sampleWeather.js` — temporary, hand-authored sample values, including prefilled Celsius and Fahrenheit values so the unit control does not calculate weather data.
- `src/styles.css` — global visual system and responsive desktop/mobile layouts.
- `src/main.jsx` — React entry point.
- `index.html` — Vite document shell and page metadata.

All displayed conditions are marked as sample data in the interface. Search, API integration, calculations, and deployment are intentionally left for later assignment stages.
