import s from './../Dialogs.module.scss'
import {NavLink} from 'react-router-dom'

export default function DialogItem(props) {
    const path = '/dialogs/' + props.id

    return (
        <div className={s.dialogs_item}>
            <NavLink to={path} className={s.dialogs_user} activeClassName={s.dialogs_active}>
                <span className={s.dialogs_avatar}></span>
                <span className={s.dialogs_name}>{props.name}</span>
            </NavLink>
        </div>
    )
}