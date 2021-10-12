import { NavLink } from 'react-router-dom';
import style from './Messages.module.css';

let Messages = (props) => {
    return (
        <main className="col-10 mt-3 ">
            <div className='row justify-content-end'>
                <div className={`${style.chat_wrapper} col-12 `}>
                    <div className={`d-flex flex-column position-relative`}>
                        <div className={`${style.chat_header} d-flex justify-content-between align-items-center`}>
                            <NavLink to="/dialogs">
                                <div className={`${style.back_btn} d-flex`}>
                                    <i class={style.arrow_left}></i>
                                    Назад
                                </div>
                            </NavLink>
                            <div className={style.name_online_block}>
                                <div className={style.name}>Alesya Shulyakovskaya</div>
                                <div className={style.online}>была в сети сегодня в 9:23</div>
                            </div>
                            <div className={style.avatar}>
                                <img src="/img/Dialog/tanya.jpg" alt="tanya logo" />
                            </div>
                        </div>

                        <div className={`${style.messages_block} align-self-stretch`}>
                            <p>Message</p>
                            <p>Message</p>
                            <p>Message</p>
                            <p>Message</p>
                            <p>Message</p>
                            <p>Message</p>
                            <p>Message</p>
                            <p>Message</p>
                            <p>Message</p>
                            <p>Message</p>
                            <p>Message</p>
                            <p>Message</p>
                            <p>Message</p>
                            <p>Message</p>
                            <p>Message</p>
                            <p>Message</p>
                            <p>Message</p>
                            <p>Message</p>
                            <p>Message</p>
                            <p>Message</p>
                            <p>Message</p>
                            <p>Message</p>
                            <p>Message</p>
                            <p>Message</p>
                            <p>Message</p>
                            <p>Message</p>
                            <p>Message</p>
                            <p>Message</p>
                            <p>Message</p>
                            <p>Message</p>
                            <p>Message</p>
                            <p>Message</p>
                            <p>Message</p>
                            <p>Message</p>
                            <p>Message</p>
                        </div>
                        <div className={`${style.input_block} d-flex justify-content-center align-items-center`}>
                            <textarea placeholder="Напишите сообщение" className={style.textArea} />
                            <button className={style.send_btn}></button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
};

export default Messages