import MyFriendsWidget from './MyFriendsWidget/MyFriendsWidget';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { NavLink } from 'react-router-dom';
import store from '../../redux/redux-store';



let Profile = (props) => {
    return (
        <main className="col-10 mt-3">
            <div className='row d-flex justify-content-end'>
                <div className={`${style.nopadding} col-3 d-flex flex-column`}>
                    <div className={`${style.profile_logo}`}>
                        <img src='img/Profile/profileImg.jpg' alt="profile" />
                        <NavLink to="#">Редактировать</NavLink>
                    </div>
                    <MyFriendsWidget friends={store.getState().friendsPage.allFriends} />
                </div>
                <div className={`col-9 ${style.nopadding}`} >
                    <div className={`${style.myPost}`}>
                        <ProfileInfo />
                        <MyPostsContainer />
                    </div>
                </div>
            </div>
        </main>)
};

export default Profile;