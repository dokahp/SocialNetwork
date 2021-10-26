import React from 'react';
import MyPosts from './MyPosts'
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";



let MyPostsContainer = (props) => {
    
    let addNewPost = () => {
        return props.dispatch(addPostActionCreator())
    }
    let onPostChange = (text) => {
        return props.dispatch(updateNewPostTextActionCreator(text))
    }
    return (
        <MyPosts posts={props.posts} 
        newPostText={props.newPostText} 
        handleAddNewPost={addNewPost} 
        handleOnPostChange={onPostChange}  />
        
    )
};

export default MyPostsContainer;