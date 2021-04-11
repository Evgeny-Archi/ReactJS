import s from './app.module.scss'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Profile from './components/Content/Profile/Profile'
import Dialogs from './components/Content/Dialogs/Dialogs'
import Main from './components/Content/Main/Main'
import Footer from './components/Footer/Footer'
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App(props) {
    return (
        <Router>
        <div className={s.wrap}>
            <Header />
            <Sidebar />
            <main className={s.content}>
                <Route exact path='/' render={ () => <Main /> } />
                <Route path='/profile' render={() => <Profile state={props.state.profile} dispatch={props.dispatch} />} />
                <Route path='/dialogs' render={() => <Dialogs state={props.state.messages} />} />
            </main>
            <Footer />
        </div>
        </Router>
    )
}

export default App