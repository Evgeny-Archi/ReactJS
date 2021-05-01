import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Main, ContentWrap, Navbar, NavbarLink, Title } from './Content.elements'
import Portfolio from './Portfolio/Portfolio'

const Content = () => {
    return (
        <Main>
            <ContentWrap>
                <Router>
                    <Navbar>
                        <NavbarLink activeClassName="active" exact to="/">
                            Home
                        </NavbarLink>
                        <NavbarLink activeClassName="active" to="/portfolio">
                            Pet-projects
                        </NavbarLink>
                        <NavbarLink activeClassName="active" to="/skills">
                            Skills
                        </NavbarLink>
                    </Navbar>
                    <Title>Evgeny Archibasov</Title>
                    <Route path="/" exact />
                    <Route path="/portfolio" component={Portfolio} />
                </Router>
            </ContentWrap>
        </Main>
    )
}

export default Content
