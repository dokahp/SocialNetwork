import { NavLink } from "react-router-dom"
import style from './SingleFriendWidget.module.css';

let SingleFriendWidget = (props) => {

    return (
        <div className={style.wrapper}>
            <div>
                <NavLink to={props.pageLink}>
                    <img src={props.logo} alt={`${props.name} logo`} />
                </NavLink>
            </div>
            <div>
                <NavLink to={props.pageLink}>
                    {props.name}
                </NavLink>
            </div>


        </div>
    )
}

export default SingleFriendWidget