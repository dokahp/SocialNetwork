import MyPostsContainer from './MyPosts/MyPostsContainer';
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { NavLink } from 'react-router-dom';
import MyFriendsWidgetContainer from './MyFriendsWidget/MyFriendsWidgetContainer';



let Profile = (props) => {
    return (
        <main className="col-10 mt-3">
            <div className='row d-flex justify-content-end'>
                <div className={`${style.nopadding} col-3 d-flex flex-column`}>
                    <div className={`${style.profile_logo}`}>
                        <img src='img/Profile/profileImg.jpg' alt="profile" />
                        <NavLink to="#">Редактировать</NavLink>
                    </div>
                    <MyFriendsWidgetContainer/>
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