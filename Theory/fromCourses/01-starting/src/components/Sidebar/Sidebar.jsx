import s from './Sidebar.module.scss'

function Sidebar() {
    return (
        <aside className={s.sidebar}>
                <nav className={s.sidebar__nav}>
                    <a href="/" className={`${s.sidebar__navitem} ${s.active}`}>Profile</a>
                    <a href="/message" className={s.sidebar__navitem}>Messages</a>
                    <a href="/news" className={s.sidebar__navitem}>News</a>
                    <a href="/music" className={s.sidebar__navitem}>Music</a>
                    <a href="/options" className={s.sidebar__navitem}>Options</a>
                </nav>
        </aside>
    )
}

export default Sidebar