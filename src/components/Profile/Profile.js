import MyFriendsWidget from './MyFriendsWidget/MyFriendsWidget';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';



let Profile = (props) => {
    return (
        <main className="col-10 mt-3">
            <ProfileInfo />
            <div className="row justify-content-end">
                
                <MyFriendsWidget />
                <div className={`${style.myPost} col-9`}>
                    <MyPostsContainer />
                </div>
            </div>
        </main>)
};

export default Profile;