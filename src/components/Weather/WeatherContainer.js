import { useEffect, useState } from "react";
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "90dc30defa838009a8db0caf3b0e2a99";


let WeatherContainer = (props) => {
  const [weather, setWeather] = useState({});
  const [currentWeather, setCurrentWeather] = useState({});
  const [loading, setLoading] = useState(true);
  const city = "Minsk";
  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      )
      .then((response) => {
        setWeather(response.data)
        setLoading(false)
      });
  }, [setWeather]);
  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      )
      .then((response) => {
        setCurrentWeather({
          temp: Math.round(response.data.main.temp),
          icon: response.data.weather[0].icon,
          description: response.data.weather[0].description,
          pressure: response.data.main.pressure,
          humidity: response.data.main.humidity,
          wind: response.data.wind,
        });
      });
  }, [setCurrentWeather]);
  if(loading) return null
  return (
  <Weather currentWeather={currentWeather} weather={weather} />);
};

export default WeatherContainer;
