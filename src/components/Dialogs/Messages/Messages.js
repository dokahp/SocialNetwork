import { NavLink } from 'react-router-dom';
import style from './Messages.module.css';
import SingleMessage from './SingleMessage/SingleMessage';

let Messages = (props) => {
    // Читаем адрес текущей страницы

    let href = String(window.location.href).split('/').at(-1)
    let allMessages = props.dialog.messages[href].map(el => 
        <SingleMessage
            id={el.id} logo={el.logo} name={el.name.split(' ').at(0)}
            message={el.message} date={el.date} />
    );
    let searchUser = props.dialog.dialogs.filter(el => el.profileId == href? el: '')
    
    return (
        <main className="col-10 mt-3 ">
            <div className='row justify-content-end'>
                <div className={`${style.chat_wrapper} col-12 `}>

                    <div className={`${style.chat_header} d-flex justify-content-between align-items-center`}>
                        <NavLink to="/dialogs">
                            <div className={`${style.back_btn} d-flex`}>
                                <i class={style.arrow_left}></i>
                                Назад
                            </div>
                        </NavLink>
                        <div className={style.name_online_block}>
                            <div className={style.name}>{searchUser[0].name}</div>
                            <div className={style.online}>была в сети сегодня в 9:23</div>
                        </div>
                        <div className={style.avatar}>
                            <img src={searchUser[0].logo} alt="tanya logo" />
                        </div>
                    </div>

                    {/* БЛОК СООБЩЕНИЙ */}
                    <div className={`${style.messages_block}`}>
                        {allMessages}
                    </div>
                    {/* БЛОК СООБЩЕНИЙ */}

                    <div className={`${style.input_block} d-flex justify-content-end align-items-center`}>
                        <textarea placeholder="Напишите сообщение" className={style.textArea} />
                        <button className={style.send_btn}></button>
                    </div>

                </div>
            </div>

        </main>
    )
};

export default Messages