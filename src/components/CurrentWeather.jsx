import React, { useEffect, useState } from "react";

const CurrentWeather = ({ city }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dedee119f9bfe8bc861db0afb0668195&units=metric`)
      .then((res) => res.json())
      .then((data) => setWeather(data));
  }, [city]);

  if (!weather) return <p>Loading weather...</p>;
  if (weather.cod !== 200) return <p>City not found!</p>;

  return (
    <div className="weather-box">
      <h2>Current Weather in {weather.name}</h2>
      <p>🌡️ Temperature: {weather.main.temp}°C</p>
      <p>💧 Humidity: {weather.main.humidity}%</p>
      <p>⛅ Condition: {weather.weather[0].description}</p>
    </div>
  );
};

export default CurrentWeather;
