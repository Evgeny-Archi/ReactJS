import s from './app.module.scss'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Profile from './components/Content/Profile/Profile'
import Dialogs from './components/Content/Dialogs/Dialogs'
import Footer from './components/Footer/Footer'

function App() {
    return (
        <div className={s.wrap}>
            <Header />
            <Sidebar />
            <main className={s.content}>
                {/* <Profile /> */}
                <Dialogs />
            </main>
            <Footer />
        </div>
    )
}

export default App