import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Main, ContentWrap, Navbar, NavbarLink, Header, Title } from './Content.elements'
import Portfolio from './Portfolio/Portfolio'
import Skills from './Skills/Skills'

const Content = ({ slideOnTop, showAvatar }) => {
    return (
        <Main>
            <ContentWrap>
                <Header position={slideOnTop}>
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

                    <div onMouseEnter={showAvatar}>
                        <Title>Evgeny Archibasov</Title>
                    </div>
                </Header>

                <Switch>
                    <Route path="/" exact />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/skills" component={Skills} />
                    <Route>
                        <h1>no match</h1>
                    </Route>
                </Switch>
            </ContentWrap>
        </Main>
    )
}

export default Content
