import { NavLink } from 'react-router-dom';
import style from './ProfileInfo.module.css';
import { useState } from 'react';

let ProfileInfo = (props) => {
    const [additionalInformation, setAdditionalInformation] = useState(false)
    const changeCondition = () => setAdditionalInformation(value => !value)
    const [editBtnVisability, setEditBtnVisability] = useState({
        main:false,
        contact:false,
        lifePosition: false,
        personalInformation: false
    })

    return (
        <>
            <div className={style.profile_aboutMe}>
                <div className={`${style.separator} d-flex justify-content-between`}>
                    <h1>Виталий Дреко</h1>
                    <div className={style.profile_aboutMe_online}>Online</div>
                </div>
                <div className={style.profile_info_row}>
                    <div className={style.profile_info_item}>День Рождения:</div>
                    <div className={style.profile_info_data}>8 июня</div>
                </div>
                <div className={style.profile_info_row}>
                    <div className={style.profile_info_item}>Город:</div>
                    <div className={style.profile_info_data}>Минск</div>
                </div>
                <div className={style.profile_info_row}>
                    <div className={style.profile_info_item}>Образование:</div>
                    <div className={style.profile_info_data}>БГЭУ</div>
                </div>
                <div></div>
                <div onClick={changeCondition} className={`${style.profile_moreInfo}`}>
                    <div className="d-flex justify-content-center align-items-center">
                        {additionalInformation ?
                            'Скрыть допольнительную информацию'
                            : 'Показать подробную информацию'}
                    </div>
                </div>
                {additionalInformation ?
                    <div>
                        {/* Подробная информация */}
                        {/* Основная информация */}
                        <div onMouseMove={(e) =>setEditBtnVisability({...editBtnVisability, main:true})}
                        onMouseOut={(e) => setEditBtnVisability({...editBtnVisability, main:false})} className={style.additionalInfo_block}>
                            <div className={style.additionalInfo_header}>
                                <span>Основная информация</span>
                                {editBtnVisability.main?<NavLink to="/edit">Редактировать</NavLink>:null}
                            </div>
                            <div className={style.profile_info_row}>
                                <div className={style.profile_info_item}>День Рождения:</div>
                                <div className={style.profile_info_data}>8 июня</div>
                            </div>
                            <div className={style.profile_info_row}>
                                <div className={style.profile_info_item}>Город:</div>
                                <div className={style.profile_info_data}>Минск</div>
                            </div>
                        </div>
                        {/* Окончание основной информации */}
                        {/* Контактная информация */}
                        <div onMouseMove={(e) =>setEditBtnVisability({...editBtnVisability, contact:true})}
                        onMouseOut={(e) => setEditBtnVisability({...editBtnVisability, contact:false})} className={style.additionalInfo_block}>
                            <div className={style.additionalInfo_header}>
                                <span>Контактная информация</span>
                                {editBtnVisability.contact?<NavLink to="/edit">Редактировать</NavLink>:null}
                            </div>
                            <div className={style.profile_info_row}>
                                <div className={style.profile_info_item}>День Рождения:</div>
                                <div className={style.profile_info_data}>8 июня</div>
                            </div>
                            <div className={style.profile_info_row}>
                                <div className={style.profile_info_item}>Город:</div>
                                <div className={style.profile_info_data}>Минск</div>
                            </div>
                        </div>
                        {/* Окончание контактной информации */}
                        {/* Жизненная позиция */}
                        <div onMouseMove={(e) =>setEditBtnVisability({...editBtnVisability, lifePosition:true})}
                        onMouseOut={(e) => setEditBtnVisability({...editBtnVisability, lifePosition:false})} className={style.additionalInfo_block}>
                            <div className={style.additionalInfo_header}>
                                <span>Жизненная позиция</span>
                                {editBtnVisability.lifePosition?<NavLink to="/edit">Редактировать</NavLink>:null}
                            </div>
                            <div className={style.profile_info_row}>
                                <div className={style.profile_info_item}>День Рождения:</div>
                                <div className={style.profile_info_data}>8 июня</div>
                            </div>
                            <div className={style.profile_info_row}>
                                <div className={style.profile_info_item}>Город:</div>
                                <div className={style.profile_info_data}>Минск</div>
                            </div>
                        </div>
                        {/* Окончание жизненной позиции */}
                        {/* Личная информация */}
                        <div onMouseMove={(e) =>setEditBtnVisability({...editBtnVisability, personalInformation:true})}
                        onMouseOut={(e) => setEditBtnVisability({...editBtnVisability, personalInformation:false})} className={style.additionalInfo_block}>
                            <div className={style.additionalInfo_header}>
                                <span>Личная информация</span>
                                {editBtnVisability.personalInformation?<NavLink to="/edit">Редактировать</NavLink>:null}
                            </div>
                            <div className={style.profile_info_row}>
                                <div className={style.profile_info_item}>День Рождения:</div>
                                <div className={style.profile_info_data}>8 июня</div>
                            </div>
                            <div className={style.profile_info_row}>
                                <div className={style.profile_info_item}>Город:</div>
                                <div className={style.profile_info_data}>Минск</div>
                            </div>
                        </div>
                        {/* Окончание личной информации */}
                    </div>
                    : null}
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
        </>
    )
}

export default ProfileInfo;