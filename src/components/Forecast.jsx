import React, { useEffect, useState } from "react";

const Forecast = ({ city }) => {
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=dedee119f9bfe8bc861db0afb0668195&units=metric`)
      .then((res) => res.json())
      .then((data) => setForecast(data));
  }, [city]);

  if (!forecast) return <p>Loading forecast...</p>;
  if (forecast.cod !== "200") return <p>Unable to fetch forecast!</p>;

  const daily = forecast.list.filter(item => item.dt_txt.includes("12:00:00"));

  return (
    <div className="forecast-box p-5">
      <h2>5-Day Forecast</h2>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {daily.map((day, index) => (
          <div key={index} className="forecast-card">
            <p>{new Date(day.dt_txt).toLocaleDateString()}</p>
            <p> {day.main.temp_min}°C - {day.main.temp_max}°C</p>
            <p>☁️ {day.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
