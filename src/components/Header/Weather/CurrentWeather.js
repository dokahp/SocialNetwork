import axios from "axios";
import { useState, useEffect } from "react";
import style from './CurrentWeather.module.css';


const APIKEY = '90dc30defa838009a8db0caf3b0e2a99'
let city = 'Minsk' 

let CurrentWeather = (props) => {
    const [todayWeather, setCurrentWeather] = useState({})
    
    useEffect(() => {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`)
        .then(response => {
            setCurrentWeather({temp: Math.floor(response.data.main.temp), 
                            icon: response.data.weather[0].icon,
                        description: response.data.weather[0].description})
        })
    },[setCurrentWeather])

    return <div>
        {todayWeather.icon? 
        <img className={style.icon} 
        src={`http://openweathermap.org/img/wn/${todayWeather.icon}@2x.png`} 
        alt={todayWeather.description} />
        : <span>Loading...</span>}
        <span className={style.temp}>{todayWeather.temp > 0? `+${todayWeather.temp}`: todayWeather.temp}</span>
    </div>
}

export default CurrentWeather;