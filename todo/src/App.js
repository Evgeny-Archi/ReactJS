import React from 'react'
import classes from './app.module.css'
import { Route, NavLink } from 'react-router-dom'
import Todos from './components/Todos/Todos'
import Quiz from './components/Quiz/Quiz'

const App = () => {
    return (
        <div className={classes.wrap}>
            <div className={classes.links}>
                <NavLink to="/" activeClassName={classes.active} exact>
                    Todos
                </NavLink>
                <NavLink to="/quiz" activeClassName={classes.active}>
                    Quiz
                </NavLink>
            </div>

            <Route path="/" exact component={Todos} />
            <Route path="/quiz" component={Quiz} />
        </div>
    )
}

export default App
