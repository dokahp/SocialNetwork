import axios from "axios";
import { useState, useEffect } from "react";
import style from "./CurrentWeather.module.css";
import { NavLink } from "react-router-dom";

const APIKEY = "90dc30defa838009a8db0caf3b0e2a99";
let city = "Minsk";

let CurrentWeather = (props) => {
  const [todayWeather, setCurrentWeather] = useState({});

  useEffect(() => {
    function getCurrentWeather() {
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`
        )
        .then((response) => {
          setCurrentWeather({
            temp: Math.round(response.data.main.temp),
            icon: response.data.weather[0].icon,
            description: response.data.weather[0].description,
          });
        });
    }
    // вызываем функцию получения данных первый раз
    getCurrentWeather();

    // далее вызываем каждые 60000 милисекунд(раз в минуту), чтобы обновить данные
    const interval = setInterval(() => {
      getCurrentWeather();
    }, 60000);
    return () => clearInterval(interval);
  }, [setCurrentWeather]);

  return (
    <div>
      {todayWeather.icon ? (
        <NavLink to="/weather" className="d-flex align-items-center">
          <img
            className={style.icon}
            src={`img/Weather/${todayWeather.icon}.svg`}
            alt={todayWeather.description}
          />
          <span className={style.temp}>
            {todayWeather.temp > 0
              ? `+${todayWeather.temp}˚`
              : `${todayWeather.temp}˚`}
          </span>
        </NavLink>
      ) : (
        <img src="img/Weather/default.svg" alt="weather" />
      )}
    </div>
  );
};

export default CurrentWeather;
