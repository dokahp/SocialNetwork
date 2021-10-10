import Post from "./Post/Post";
import style from './MyPosts.module.css';
import React from 'react';

let MyPosts = (props) => {
    let post = props.posts.map(el => <Post text={el.text} like={el.like} />)

    let newPostText = React.createRef();
    let addNewPost = () => {
        return props.dispatch({type: 'ADD-POST'})
    }
    let onPostChange = () => {
        let text = newPostText.current.value;
        return props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText:text})
    }
    return (
        <div>
            <div className={`${style.newPost} d-flex flex-column align-items-end`}>
                
                <textarea placeholder="Что у Вас нового?" onChange={onPostChange} ref={newPostText} value={props.newPostText}></textarea>
                <button className={style.addPostButton} onClick={addNewPost}>Опубликовать</button>
            </div>
            {/* Добавляем посты на стену */}
            {post}
            {/* Конец */}
        </div>

    )
};

export default MyPosts;