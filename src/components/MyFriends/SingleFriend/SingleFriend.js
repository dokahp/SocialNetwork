import { NavLink } from 'react-router-dom';
import style from './SingleFriend.module.css';


let SingleFriend = (props) => {
    return (
        <div className={`row ${style.wrapper}`}>
            <div className={`${style.content} d-flex justify-content-between`}>
                <div className={`${style.logoInfoWrapper} d-flex`}>
                    <div className={style.logo}>
                        <img src={props.logo} alt="personalLogo" />
                    </div>
                    <div className={style.userInfo}>
                        <div className={style.userNameLink}>
                            <NavLink to={props.pageLink}>
                                {props.name}
                            </NavLink>
                        </div>
                        <div className={style.userEduWork}>{props.eduJob}</div>
                        <div className={style.userWriteButton}>
                            <NavLink to={props.writeLink}>
                                Написать сообщение
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-end">Del</div>
            </div>

        </div>
    )
};

export default SingleFriend;