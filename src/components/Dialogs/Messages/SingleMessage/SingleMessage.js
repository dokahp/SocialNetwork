import style from './SingleMessage.module.css';


let SingleMessage = (props) => {
    return (
            <div className={`${style.wrapper} ${props.name === 'Виталий'?'justify-content-end':''}`}>
                <div className={style.img}>
                    <img src={props.logo} alt="personalphoto" />
                </div>
                <div className={style.sender_text}>
                    <div className={style.header_message_wrapper}>
                        <div className={style.sender}>{props.name}</div>
                        <div className={style.datetime}>{props.date}</div>
                    </div>
                    <div className={style.message}>
                        {props.message}
                    </div>
                </div>
            </div>
            )
};

            export default SingleMessage;
