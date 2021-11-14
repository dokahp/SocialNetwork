import { NavLink } from 'react-router-dom';
import style from './ProfileInfo.module.css';
import { useState } from 'react';

let ProfileInfo = (props) => {
    const [additionalInformation, setAdditionalInformation] = useState(false)
    const changeCondition = () => setAdditionalInformation(value => !value)
    const [editBtnVisability, setEditBtnVisability] = useState({
        main: 'none',
        contact: 'none',
        lifePosition: 'none',
        personalInformation: 'none'
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
                        <div onMouseOver={(e) => setEditBtnVisability({ ...editBtnVisability, main: 'block' })}
                            onMouseOut={(e) => setEditBtnVisability({ ...editBtnVisability, main: 'none' })} className={style.additionalInfo_block}>
                            <div className={style.additionalInfo_header}>
                                <span>Основная информация</span>
                                <NavLink to="/edit" style={{ display: editBtnVisability.main }} >Редактировать</NavLink>
                            </div>
                            <div className={style.profile_info_row}>
                                <div className={style.profile_info_item}>Родной город:</div>
                                <div className={style.profile_info_data}>Минск</div>
                            </div>
                            <div className={style.profile_info_row}>
                                <div className={style.profile_info_item}>Языки:</div>
                                <div className={style.profile_info_data}>Русский, Английский</div>
                            </div>
                        </div>
                        {/* Окончание основной информации */}
                        {/* Контактная информация */}
                        <div onMouseMove={(e) => setEditBtnVisability({ ...editBtnVisability, contact: 'block' })}
                            onMouseOut={(e) => setEditBtnVisability({ ...editBtnVisability, contact: 'none' })} className={style.additionalInfo_block}>
                            <div className={style.additionalInfo_header}>
                                <span>Контактная информация</span>
                                <NavLink to="/edit" style={{ display: editBtnVisability.contact }}>Редактировать</NavLink>
                            </div>
                            <div className={style.profile_info_row}>
                                <div className={style.profile_info_item}>Мобильный телефон:</div>
                                <div className={style.profile_info_data}>+375(29)363-07-08</div>
                            </div>
                            <div className={style.profile_info_row}>
                                <div className={style.profile_info_item}>Доп. телефон:</div>
                                <div className={style.profile_info_data}>+375(29)538-70-80</div>
                            </div>
                            <div className={style.profile_info_row}>
                                <div className={style.profile_info_item}>Skype:</div>
                                <div className={style.profile_info_data}>doka.by</div>
                            </div>
                            <div className={style.profile_info_row}>
                                <div className={style.profile_info_item}>Twitter:</div>
                                <div className={style.profile_info_data}>doka_by</div>
                            </div>
                            <div className={style.profile_info_row}>
                                <div className={style.profile_info_item}>Личный сайт:</div>
                                <div className={style.profile_info_data}>dreko.by</div>
                            </div>
                        </div>
                        {/* Окончание контактной информации */}
                        {/* Жизненная позиция */}
                        <div onMouseMove={(e) => setEditBtnVisability({ ...editBtnVisability, lifePosition: 'block' })}
                            onMouseOut={(e) => setEditBtnVisability({ ...editBtnVisability, lifePosition: 'none' })} className={style.additionalInfo_block}>
                            <div className={style.additionalInfo_header}>
                                <span>Жизненная позиция</span>
                                <NavLink to="/edit" style={{ display: editBtnVisability.lifePosition }}>Редактировать</NavLink>
                            </div>
                            <div className={style.profile_info_row}>
                                <div className={style.profile_info_item}>Полит. предпочтения:</div>
                                <div className={style.profile_info_data}>Умеренные</div>
                            </div>
                            <div className={style.profile_info_row}>
                                <div className={style.profile_info_item}>Мировоззрение:</div>
                                <div className={style.profile_info_data}>Атеист</div>
                            </div>
                            <div className={style.profile_info_row}>
                                <div className={style.profile_info_item}>Главное в жизни:</div>
                                <div className={style.profile_info_data}>Саморазвитие</div>
                            </div>
                            <div className={style.profile_info_row}>
                                <div className={style.profile_info_item}>Главное в людях:</div>
                                <div className={style.profile_info_data}>Ум и креативность</div>
                            </div>
                            <div className={style.profile_info_row}>
                                <div className={style.profile_info_item}>Отношение к курению:</div>
                                <div className={style.profile_info_data}>Компромисное</div>
                            </div>
                            <div className={style.profile_info_row}>
                                <div className={style.profile_info_item}>Отношение к алкоголю:</div>
                                <div className={style.profile_info_data}>Компромисное</div>
                            </div>
                        </div>
                        {/* Окончание жизненной позиции */}
                        {/* Личная информация */}
                        <div onMouseMove={(e) => setEditBtnVisability({ ...editBtnVisability, personalInformation: 'block' })}
                            onMouseOut={(e) => setEditBtnVisability({ ...editBtnVisability, personalInformation: 'none' })} className={style.additionalInfo_block}>
                            <div className={style.additionalInfo_header}>
                                <span>Личная информация</span>
                                <NavLink to="/edit" style={{ display: editBtnVisability.personalInformation }}>Редактировать</NavLink>
                            </div>
                            <div className={style.profile_info_row}>
                                <div className={style.profile_info_item}>Деятельность:</div>
                                <div className={style.profile_info_data}>Программирование, бизнес</div>
                            </div>
                            <div className={style.profile_info_row}>
                                <div className={style.profile_info_item}>Интересы:</div>
                                <div className={style.profile_info_data}>Образование, развитие</div>
                            </div>
                            <div className={style.profile_info_row}>
                                <div className={style.profile_info_item}>Любимая музыка:</div>
                                <div className={style.profile_info_data}>Би-2, Pink Floyd</div>
                            </div>
                            <div className={style.profile_info_row}>
                                <div className={style.profile_info_item}>Любимые фильмы:</div>
                                <div className={style.profile_info_data}>Фильмы Гая Ричи</div>
                            </div>
                            <div className={style.profile_info_row}>
                                <div className={style.profile_info_item}>Любимые телешоу:</div>
                                <div className={style.profile_info_data}>Не смотрю телешоу</div>
                            </div>
                            <div className={style.profile_info_row}>
                                <div className={style.profile_info_item}>Любимые книги:</div>
                                <div className={style.profile_info_data}>Грокаем Алгоритмы</div>
                            </div>
                            <div className={style.profile_info_row}>
                                <div className={style.profile_info_item}>Любимые игры:</div>
                                <div className={style.profile_info_data}>Mu Online</div>
                            </div>
                            <div className={style.profile_info_row}>
                                <div className={style.profile_info_item}>Любимые цитаты:</div>
                                <div className={style.profile_info_data}>Никогда не бойся делать то, что ты не умеешь.</div>
                            </div>
                            <div className={style.profile_info_row}>
                                <div className={style.profile_info_item}>О себе:</div>
                                <div className={style.profile_info_data}>Никогда не бойся делать то, что ты не умеешь.</div>
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