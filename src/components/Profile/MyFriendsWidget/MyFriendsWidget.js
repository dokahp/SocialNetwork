import { NavLink } from 'react-router-dom';
import style from './MyFriendsWidget.module.css'
import SingleFriendWidget from './SingleFriendWidget/SingleFriendWidget';

let MyFriendsWidget = (props) => {
    // перемешиваем массив друзей, а затем выводим максимум шесть друзей
    let allFriendsRandom = props.friends.sort(() => 0.5 - Math.random());
    allFriendsRandom = props.friends.slice(0, 6).map(el => <SingleFriendWidget 
        key={el.id} pageLink={el.pageLink} logo={el.logo} name={el.name.split(' ')[0]} />)
    return (
        <div className={`${style.wrapper} mt-3`}>
            <div className={style.header}>
                <NavLink to="/friends">
                    <span className={style.headerLabel}>Друзья</span>
                    <span className={style.friendsCount}>{props.friends.length}</span>
                </NavLink>
            </div>
            <div className={`${style.allFriends} `}>
                {allFriendsRandom}
            </div>
        </div>

    )
};


export default MyFriendsWidget;