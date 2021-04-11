import {NavLink} from 'react-router-dom'
import s from './friends.module.css'

export default function Friends(props) {
    const friendsList = props.state.friendsList.map(item => <NavLink to='' key={item.id} className={s.item}>{item.name}</NavLink>)

    return (
        <div className={s.aside_friends}>
            { friendsList }
        </div>
    )
}