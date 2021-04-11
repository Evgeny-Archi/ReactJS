import s from './Sidebar.module.scss'
import {NavLink} from 'react-router-dom'
import Friends from './Friends/Friends'

function Sidebar(props) {
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

            <Friends state={props.state} />
        </aside>
    )
}

export default Sidebar