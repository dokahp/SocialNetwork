import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import style from './Profile.module.css';



let Profile = (props) => {
    return (
        <main className="col-10 mt-3">
                <ProfileInfo />
            <div className="row justify-content-end">
                    <div className={`${style.myPost} col-9`}>
                        <MyPostsContainer posts={props.posts} newPostText={props.newPostText} dispatch={props.dispatch}/>
                    </div>
                </div>
        </main>)
};

export default Profile;