import s from './Sidebar.module.scss'
import {NavLink} from 'react-router-dom'

function Sidebar() {
    return (
        <aside className={s.sidebar}>
            <nav className={s.sidebar__nav}>
                <NavLink exact to="/" className={s.sidebar__navitem} activeClassName={s.active}>Home</NavLink>
                <NavLink to="/profile" className={s.sidebar__navitem} activeClassName={s.active}>Profile</NavLink>
                <NavLink to="/dialogs" className={s.sidebar__navitem} activeClassName={s.active}>Messages</NavLink>
                <NavLink to="/news" className={s.sidebar__navitem}>News</NavLink>
                <NavLink to="/music" className={s.sidebar__navitem}>Music</NavLink>
                <NavLink to="/options" className={s.sidebar__navitem}>Options</NavLink>
            </nav>
        </aside>
    )
}

export default Sidebar