import './app.css'

function App() {
    return (
        <div className="header">
            <Header />
            <Nav />
        </div>
    )
}

function Header() {
    return (
        <h1 className="header-title">Title</h1>
    )
}

function Nav() {
    return (
        <ul>
            <li>one</li>
            <li>two</li>
        </ul>
    )
}

export default App