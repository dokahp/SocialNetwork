import { NavLink } from 'react-router-dom';
import style from './MyFriends.module.css';
import SingleFriend from './SingleFriend/SingleFriend';


let MyFriends = (props) => {
    let singleFriend = props.allFriends.map(el => <SingleFriend
        key={el.id}
        logo={el.logo}
        name={el.name}
        pageLink={el.pageLink}
        eduJob={el.eduJob}
        writeLink={el.writeLink} />)
    return (
        <main className="col-10 mt-3">
            <div className="row">
                <div className={`${style.nav} d-flex align-items-center`}>
                    <NavLink to='/friends'>
                        <div className={`${style.navLink} ${style.navActive}`}>Все друзья <span className={style.allFriendsCount}>{props.allFriends.length}</span></div>
                    </NavLink>
                    <NavLink to='/onlinefriends'>
                        <div className={style.navLink}>Друзья онлайн</div>
                    </NavLink>
                </div>
            </div>
            {singleFriend}
        </main>
    )
};

export default MyFriends;