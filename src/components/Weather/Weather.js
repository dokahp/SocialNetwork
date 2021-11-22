import style from "./Weather.module.css";

let Weather = (props) => {
  return (
    <main className={`${style.wrapper} col-10 mt-3`}>
      <div className="row">
        {/* TODAY */}
        <div className={style.todayWrapper}>
          <div className={style.dayHeader}>
            <h2 className={style.dayFontH2}>Сегодня</h2>
            <span className={style.dateSpan}>21 ноября</span>
          </div>
          <ul className={style.todayTimeWeather}>
            <li>
              <div className={style.dt}>
                <div className={style.todayTime}>утром</div>
                <div className={style.todayTemp}>+7˚</div>
              </div>
              <img
                className={style.otherImg}
                src={`img/Weather/01d.svg`}
                alt={`cloud`}
              />
            </li>
            <li>
              <div className={style.dt}>
                <div className={style.todayTime}>днем</div>
                <div className={style.todayTemp}>+6˚</div>
              </div>
              <img
                className={style.otherImg}
                src={`img/Weather/10d.svg`}
                alt={`cloud`}
              />
            </li>
            <li>
              <div className={style.dt}>
                <div className={style.todayTime}>вечером</div>
                <div className={style.todayTemp}>+4˚</div>
              </div>
              <img
                className={style.otherImg}
                src={`img/Weather/10n.svg`}
                alt={`cloud`}
              />
            </li>
            <li>
              <div className={style.dt}>
                <div className={style.todayTime}>ночью</div>
                <div className={style.todayTemp}>+1˚</div>
              </div>
              <img
                className={style.otherImg}
                src={`img/Weather/02n.svg`}
                alt={`cloud`}
              />
            </li>
          </ul>
        </div>
        {/* END TODAY */}
        {/* CURRENT */}
        <div className={style.currentWrapper}>
          <h1 className={style.currentHeader}>Сейчас в Минске</h1>
          <div className="d-flex justify-content-center align-items-center">
            <img
              className={style.currentImg}
              src={`img/Weather/13n.svg`}
              alt={`cloud`}
            />

            <div>
              <span className={style.currentTemp}>+6˚</span>
              <br></br>
              <span>
                Сплошная облачность <br></br>
                Ветер западный 3 м/с <br></br>
                Давление 754 мм рт. ст.
              </span>
            </div>
          </div>
        </div>
        {/* END OF CURRENT */}
      </div>
    </main>
  );
};

export default Weather;
