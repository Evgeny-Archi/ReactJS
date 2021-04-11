import s from './app.module.scss'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Profile from './components/Content/Profile/Profile'
import Dialogs from './components/Content/Dialogs/Dialogs'
import Main from './components/Content/Main/Main'
import Footer from './components/Footer/Footer'
import {BrowserRouter as Router, Route} from 'react-router-dom'

const HomeComponent = () => <Main />

function App(props) {
    return (
        <Router>
        <div className={s.wrap}>
            <Header />
            <Sidebar state={props.appState.friends} />
            <main className={s.content}>
                <Route exact path='/' component={HomeComponent} />      {/* Можно так */}
                <Route path='/profile' render={() => <Profile state={props.appState.profile} addPost={props.addPost} updateNewPost={props.updateNewPost} />} />    {/* Или так */}
                <Route path='/dialogs' render={() => <Dialogs state={props.appState.messages} />} />
            </main>
            <Footer />
        </div>
        </Router>
    )
}

export default App