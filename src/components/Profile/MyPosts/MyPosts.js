import Post from "./Post/Post";
import style from './MyPosts.module.css';
import React from 'react';

let MyPosts = (props) => {
    let post = props.posts.map(el => <Post text={el.text} like={el.like} />)

    let textArea = React.createRef();
    let addNewPost = () => {
        
        return props.addPost({text:textArea.current.value, like: 0})
    }

    return (
        <div>
            <div className={`${style.newPost} d-flex flex-column align-items-end`}>
                <textarea placeholder="Что у Вас нового?" ref={textArea}></textarea>
                <button className={style.addPostButton} onClick={addNewPost}>Опубликовать</button>
            </div>
            {/* Добавляем посты на стену */}
            {post}
            {/* Конец */}
        </div>

    )
};

export default MyPosts;