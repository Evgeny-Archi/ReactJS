import React from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Main, ContentWrap, Navbar, NavbarLink, Header, Title } from './Content.elements'
import Portfolio from './Portfolio/Portfolio'
import Skills from './Skills/Skills'

const pageVariants = {
    initial: {
        opacity: 0,
        x: '-100vw',
        transition: {
            delay: 1,
        },
    },
    in: {
        opacity: 1,
        x: 0,
    },
    out: {
        opacity: 0,
        x: '100vw',
    },
}

const Content = ({ slideOnTop, showAvatar }) => {
    const location = useLocation()

    return (
        <Main>
            <ContentWrap>
                <Header position={slideOnTop}>
                    <Navbar>
                        <NavbarLink activeClassName="active" exact to="/">
                            Home
                        </NavbarLink>
                        <NavbarLink activeClassName="active" to="/portfolio">
                            Portfolio
                        </NavbarLink>
                        <NavbarLink activeClassName="active" to="/skills">
                            Skills
                        </NavbarLink>
                    </Navbar>

                    <div onMouseEnter={showAvatar}>
                        <Title>Evgeny Archibasov</Title>
                    </div>
                </Header>

                <AnimatePresence exitBeforeEnter>
                    <Switch location={location} key={location.pathname}>
                        <Route path="/" exact />
                        <Route
                            path="/portfolio"
                            render={() => <Portfolio pageVariants={pageVariants} />}
                        />
                        <Route
                            path="/skills"
                            render={() => <Skills pageVariants={pageVariants} />}
                        />
                        <Route>
                            <h1>no match</h1>
                        </Route>
                    </Switch>
                </AnimatePresence>
            </ContentWrap>
        </Main>
    )
}

export default Content
