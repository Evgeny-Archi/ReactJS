import './app.scss'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Profile from './components/Profile/Profile'
import Footer from './components/Footer/Footer'

function App() {
    return (
        <div className="wrap">
            <Header />
            <Sidebar />
            <Profile />
            <Footer />
        </div>
    )
}

export default App