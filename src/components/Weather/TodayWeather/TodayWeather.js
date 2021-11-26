import style from './TodayWeather.module.css';

let TodayWeather = (props) => {
    let hours = new Date(props.date).getHours()
    hours = hours < 10? `0${hours}`: `${hours}`
    let minutes = new Date(props.date).getMinutes()
  return (
    <li>
      <div className={style.dt}>
        <div className={style.todayTime}>{`${hours}:${minutes}0`}</div>
        <div className={style.todayTemp}>{props.temp > 0?`+${props.temp}˚`:`${props.temp}˚`}</div>
      </div>
      <img
        className={style.otherImg}
        src={`img/Weather/${props.icon}.svg`}
        alt={props.description}
      />
    </li>
  );
};

export default TodayWeather;
