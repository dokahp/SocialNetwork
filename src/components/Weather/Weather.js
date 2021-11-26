import style from "./Weather.module.css";
import TodayWeather from "./TodayWeather/TodayWeather";
import WeatherNow from "./WeatherNow/WeatherNow";
import Forecast4Days from "./Forecast4Days/Forecast4Days";

const currentDate = new Date();
export const MONTH = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];

let Weather = (props) => {
  let today = props.weather.list.filter(
    (el) => new Date().getDate() === new Date(el.dt_txt).getDate()
  );
  let forecast = [];
  for (let i = 1; i < 5; i++) {
    forecast.push(props.weather.list.slice(8 * i, (8 * i) + 8))
  }
  return (
    <main className={`${style.wrapper} col-10 mt-3`}>
      <div className="row justify-content-center">
        {/* Weather NOW */}
        <WeatherNow currentWeather={props.currentWeather} />
        {/* END OF Weather NOW */}
      </div>
      {/* TODAY */}
      <div className={style.todayWrapper}>
        <div className={style.todayForecast}>
          <h3>
            Сегодня {currentDate.getDate()} {MONTH[currentDate.getMonth()]}{" "}
          </h3>
          <ul className={style.todayTimeWeather}>
            {today.map((el) => (
              <TodayWeather
                key={el.dt}
                date={el.dt_txt}
                temp={Math.round(el.main.temp)}
                icon={el.weather[0].icon}
                description={el.weather[0].description}
              />
            ))}
          </ul>
        </div>
      </div>
      {/* END OF TODAY */}
      {/* 4 DAYS FORECAST */}
      <div className="row">
        <ul className={style.ul}>
            {forecast.map((el, i )=> <Forecast4Days key={i} forecast={el} />)}
        </ul>
      </div>
      {/* END OF 4 DAYS FORECAST */}
    </main>
  );
};

export default Weather;
