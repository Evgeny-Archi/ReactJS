function Sidebar() {
    return (
        <aside className="sidebar">
                <nav className="sidebar__nav">
                    <a href="/" className="sidebar__nav-item active">Profile</a>
                    <a href="/message" className="sidebar__nav-item">Messages</a>
                    <a href="/news" className="sidebar__nav-item">News</a>
                    <a href="/music" className="sidebar__nav-item">Music</a>
                    <a href="/options" className="sidebar__nav-item">Options</a>
                </nav>
        </aside>
    )
}

export default Sidebar