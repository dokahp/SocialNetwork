import style from "./Forecast4Days.module.css";
import { MONTH } from "../Weather";

const day = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];

let Forecast4Days = ({ forecast }) => {
  let currentDate = new Date(forecast[0].dt_txt);
  let daytime = forecast.slice(3);
  let [tempMinDay, tempMaxDay] = [
    Math.round(daytime.map((el) => el.main.temp_min).sort((a, b) => a > b)[0]),
    Math.round(
      daytime
        .map((el) => el.main.temp_max)
        .sort((a, b) => a > b)
        .at(-1)
    ),
  ];
  let night = forecast.slice(0, 3);
  let [tempMinNight, tempMaxNight] = [
    Math.round(night.map((el) => el.main.temp_min).sort((a, b) => a > b)[0]),
    Math.round(
      night
        .map((el) => el.main.temp_max)
        .sort((a, b) => a > b)
        .at(-1)
    ),
  ];

  return (
    <li>
      <div className={style.dayHeader}>
        <div className={style.dayFontH2}>
          {new Date(forecast[1].dt_txt).getDate() === new Date().getDate() + 1
            ? `Завтра`
            : day[new Date(forecast[0].dt_txt).getDay()]}
        </div>
        <div className={style.dateSpan}>{`${currentDate.getDate()} ${
          MONTH[currentDate.getMonth()]
        }`}</div>
      </div>
      <img
        src={`img/Weather/${forecast[5].weather[0].icon}.svg`}
        alt={`${forecast[5].weather[0].description}`}
        className={style.otherImg}
      />
      <div className={style.everyDayTemp}>
        {tempMinDay === tempMaxDay
          ? `${tempMaxDay}°`
          : `${tempMinDay}..${tempMaxDay}°`}
      </div>
      <div className={`${style.everyDayTemp} ${style.nightTemp}`}>
        {tempMinNight === tempMaxNight
          ? `${tempMaxNight}°`
          : `${tempMinNight}..${tempMaxNight}°`}
      </div>
      <div>{`${forecast[5].main.pressure} мм рт. ст.`}</div>
      <div>{`Влажность ${forecast[5].main.humidity}%`}</div>
    </li>
  );
};

export default Forecast4Days;
