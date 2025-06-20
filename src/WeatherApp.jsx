import React, { Suspense, useState } from "react";
const CurrentWeather = React.lazy(() => import("./components/CurrentWeather"));
const Forecast = React.lazy(() => import("./components/Forecast"));

function WeatherApp() {
  const [city, setCity] = useState("Chennai");

  return (
    <div className="container">
      <h1>Weather App</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />

      <Suspense fallback={<p>Loading current weather...</p>}>
        <CurrentWeather city={city} />
      </Suspense>

      <Suspense fallback={<p>Loading forecast...</p>}>
        <Forecast city={city} />
      </Suspense>
    </div>
  );
}

export default WeatherApp;
