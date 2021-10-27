import MyPosts from './MyPosts'
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleAddNewPost: () => dispatch(addPostActionCreator()),
        handleOnPostChange: (text) => dispatch(updateNewPostTextActionCreator(text))
    }
}
let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;