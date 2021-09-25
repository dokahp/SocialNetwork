import { NavLink } from 'react-router-dom';
import style from './Navigation.module.css';


let Navigation = () => {
    return (
        <nav className="col-2 mt-3">
            <ul>
                <NavLink to="/">
                    <li className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <img src="img/leftMenu/home.png" alt="Моя страница" />
                            <div className={style.nav_item}>Моя страница</div>
                        </div>
                    </li>
                </NavLink>
                <NavLink to="/news">
                    <li className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <img src="img/leftMenu/news.png" alt="Новости" />
                            <div className={style.nav_item}>Новости</div>
                        </div>
                    </li>
                </NavLink>
                <NavLink to="/dialogs">
                    <li className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <img src="img/leftMenu/messages.png" alt="Моя страница" />
                            <div className={style.nav_item}>Сообщения</div>
                        </div>
                        <div className={style.nav_count}>415</div>
                    </li>
                </NavLink>
                <NavLink to="/friends">
                    <li className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <img src="img/leftMenu/friends.png" alt="Друзья" />
                            <div className={style.nav_item}>Друзья</div>
                        </div>
                        <div className={style.nav_count}>7</div>
                    </li>
                </NavLink>
                <NavLink to="/groups">
                    <li className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <img src="img/leftMenu/groups.png" alt="Друзья" />
                            <div className={style.nav_item}>Сообщества</div>
                        </div>
                        {/* <div className={style.nav_count}></div> */}
                    </li>
                </NavLink>
                <NavLink to="/photos">
                    <li className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <img src="img/leftMenu/photos.png" alt="Друзья" />
                            <div className={style.nav_item}>Фотографии</div>
                        </div>
                        {/* <div className={style.nav_count}></div> */}
                    </li>
                </NavLink>
                <NavLink to="/music">
                    <li className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <img src="img/leftMenu/music.png" alt="Друзья" />
                            <div className={style.nav_item}>Музыка</div>
                        </div>
                        {/* <div className={style.nav_count}></div> */}
                    </li>
                </NavLink>
            </ul>
        </nav>)
}

export default Navigation;