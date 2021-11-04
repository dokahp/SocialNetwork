import { NavLink } from 'react-router-dom';
import style from './ProfileInfo.module.css';

let ProfileInfo = (props) => {
    return (
        <div className='row justify-content-end'>
            <div className={`${style.profile_logo} col-3 d-flex flex-column`}>
                <img src='img/Profile/profileImg.jpg' alt="profile" />
                <NavLink to="#">Редактировать</NavLink>
            </div>
            
            <div className={`${style.profile_aboutMe} col-9 ms-3`}>
                <div className={`${style.separator} d-flex justify-content-between`}>
                    <h1>Виталий Дреко</h1>
                    <div className={style.profile_aboutMe_online}>Online</div>
                </div>
                <div className={`${style.profile_info_row} d-flex`}>
                    <div className={style.profile_info_item}>День Рождения:</div>
                    <div className={style.profile_info_data}>8 июня</div>
                </div>
                <div className={`${style.profile_info_row} d-flex`}>
                    <div className={style.profile_info_item}>Город:</div>
                    <div className={style.profile_info_data}>Минск</div>
                </div>
                <div className={`${style.profile_info_row} d-flex`}>
                    <div className={style.profile_info_item}>Образование:</div>
                    <div className={style.profile_info_data}>БГЭУ</div>
                </div>
                <div className={`${style.profile_moreInfo}`}>
                    <NavLink to="#" className="d-flex justify-content-center align-items-center">
                        Показать подробную информацию
                    </NavLink>
                </div>
                <div className={style.separator}></div>
                <ul className={`${style.counts_module} d-flex justify-content-around`}>
                    <li>
                        <NavLink to='/friends'>
                            <div className={style.counts_module_count}>193</div>
                            <div className={style.counts_module_label}>друга</div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/photos">
                            <div className={style.counts_module_count}>132</div>
                            <div className={style.counts_module_label}>фотографии</div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/groups">
                            <div className={style.counts_module_count}>23</div>
                            <div className={style.counts_module_label}>отметки</div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/music">
                            <div className={style.counts_module_count}>78</div>
                            <div className={style.counts_module_label}>видеозаписей</div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/music">
                            <div className={style.counts_module_count}>252</div>
                            <div className={style.counts_module_label}>аудиозаписи</div>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ProfileInfo;