import style from './Post.module.css';
import React from 'react';
import renderHTML from 'react-render-html'




let Post = (props) => {
    return (
        <div className={style.post}>
            <div className={`${style.post_header} d-flex align-items-center`}>
                <img src='img/Profile/postLogo.jpg' alt="personal logo" />
                <div className={style.header_info}>
                    <div className={style.header_author}>Виталий Дреко</div>
                    <div className={style.header_date}>{props.date}</div>
                </div>
            </div>
            <div className={style.post_text}>
                {renderHTML(props.text)}
            </div>
            <div className={`${style.post_buttons} d-flex`}>
                <div className={`${style.post_buttons_like} d-flex align-items-center`}>
                    <div><img src="img/Profile/heart.png" alt="" /></div>
                    <div className={style.post_likeCount}>{props.like === '0'? '': props.like}</div>
                </div>
            </div>
        </div>
    )
}


export default Post;