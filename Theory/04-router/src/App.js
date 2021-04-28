import React from 'react'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import Cars from './Cars/Cars'
import About from "./About/About";
import classes from './app.module.css'
import CarDetails from "./CarDetails/CarDetails";

class App extends React.Component {

    state = {
        isLogIn: false
    }

    render() {
        return (
            <div className={classes.App}>
                <nav className={classes.nav}>
                    <NavLink to='/' exact activeClassName={classes.active}>Home</NavLink>
                    <NavLink
                        to={{
                            pathname: '/cars'
                        }}
                        activeClassName={classes.active}
                        activeStyle={{color: 'blue'}}
                    >Cars</NavLink>
                    <NavLink to={{
                        pathname: '/about'
                    }} activeClassName={classes.active}>About</NavLink>
                </nav>

                <div style={{border: '1px solid #ccc'}}>
                    <h2>Logged in: {this.state.isLogIn ? 'true' : 'false'}</h2>
                    <button onClick={() => this.setState({isLogIn: true})}>Log in</button>
                </div>

                <Switch>
                    <Route exact path='/' render={() => <h1>Home page</h1>} />

                    {this.state.isLogIn ? <Route path='/about' component={About} /> : null}


                    <Route path='/cars/:name' component={CarDetails} />
                    <Route path='/cars' component={Cars} />
                    {/*<Route render={() => <h1 style={{color: 'red', textAlign: 'center'}}>404 not found</h1>} />*/}
                    <Redirect to={'/'} />
                </Switch>
            </div>
        )
    }
}

export default App