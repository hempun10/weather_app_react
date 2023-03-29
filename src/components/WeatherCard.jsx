import React, { useState, useEffect } from "react";
import "../style.css";
import Card from "./Card";

const WeatherCard = () => {
  const [searchValue, setSearchValue] = useState("Pokhara");
  const [tempInfo,setTempInfo] = useState('')

  const apiKey = `20cf7d313f82a0cad11c20f53c28f221`;
  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=${apiKey}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;
      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
    };
    setTempInfo(myNewWeatherInfo)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="Search...."
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button
            className="searchButton"
            type="button"
            onClick={getWeatherInfo}
          >
            {" "}
            Search
          </button>
        </div>
      </div>
    <Card tempInfo ={tempInfo}/>
    </>
  );
};

export default WeatherCard;
