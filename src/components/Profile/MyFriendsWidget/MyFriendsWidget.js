import { NavLink } from 'react-router-dom';
import style from './MyFriendsWidget.module.css'

let MyFriendsWidget = (props) => {
    return (
        <div className={`${style.wrapper} mt-3`}>
            <div className={style.header}>
                <NavLink to="/friends">
                    <span className={style.headerLabel}>Друзья</span>
                    <span className={style.friendsCount}>193</span>
                </NavLink>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                
            </div>
        </div>

    )
};


export default MyFriendsWidget;