import style from './Header.module.css';
import CurrentWeather from './Weather/CurrentWeather';

let Header = () => {
    return (
        <header className={`${style.header} col-12 d-flex justify-content-between align-items-center`}>
            <img src="/img/vkLogo.png" alt="logo" className="img-fluid" />
            <CurrentWeather />
            <div className={`${style.header_person} d-flex justify-content-around align-items-center`}>
                <div className={style.header_person_name}>
                    Виталий
                </div>
                <div className={style.header_person_logo}>
                    <img src="img/headerLogo.jpg" alt="person_logo" className="img-fluid" />
                </div>
                <img src="img/Vector.png" className="img-fluid" alt="" />
            </div>
        </header>)
}

export default Header;