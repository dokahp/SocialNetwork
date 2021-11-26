import style from './WeatherNow.module.css';

let WeatherNow = (props) => {
    if (!props.currentWeather.wind) {return null}
    return (
        <div className={style.currentWrapper}>
        <h1 className={style.currentHeader}>Сейчас в Минске</h1>
        <div className="d-flex justify-content-center align-items-center">
          <img
            className={style.currentImg}
            src={`img/Weather/${props.currentWeather.icon}.svg`}
            alt={props.currentWeather.description}
          />
          <div>
            <span className={style.currentTemp}>
              {props.currentWeather.temp > 0
                ? `+${props.currentWeather.temp}˚`
                : `${props.currentWeather.temp}˚`}
            </span>
            <div>{`Влажность ${props.currentWeather.humidity}%`} </div>
            <div>
              {
                `Ветер ${props.currentWeather.wind.speed} м/с порывы до ${props.currentWeather.wind.gust}`
              }
            </div>
            <div>{`Давление ${props.currentWeather.pressure} мм рт. ст.`}</div>
          </div>
        </div>
      </div>
    )
}

export default WeatherNow