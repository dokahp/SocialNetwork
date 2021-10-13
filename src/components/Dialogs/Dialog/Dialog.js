import { NavLink } from 'react-router-dom';
import style from './Dialog.module.css';


let Dialog = (props) => {
    return (
        <div className={style.separator}>
            <NavLink to={'/dialogs/' + props.profileId}>
                <div className={style.dialog}>
                    <div className="d-flex  align-items-center">
                        <div className={style.dialog_logo}>
                            <img src={`${props.logo}`} alt="person logo" />
                        </div>
                        <div className={`${style.dialog_main} d-flex justify-content-between`}>
                            <div>
                                <div className={style.dialog_name}>{props.name}</div>
                                <div className={style.dialog_text}>{props.text}</div>
                            </div>
                            <div className={style.dialog_date}>
                                {props.date}
                            </div>
                        </div>
                    </div>
                </div>
            </NavLink>
        </div>
    )
};


export default Dialog;