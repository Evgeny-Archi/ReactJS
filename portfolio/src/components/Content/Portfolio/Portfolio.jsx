import React from 'react'
import { useAnimation, AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import List from './List'
import Item from './Item'
import { Wrap } from './Portfolio.elements'

const Store = ({ match }) => {
    const { id } = match.params

    return (
        <>
            <List selectedId={id} />
            <AnimatePresence>{id && <Item id={id} key="item" />}</AnimatePresence>
        </>
    )
}

const Portfolio = (props) => {
    const controls = useAnimation()

    controls.start({
        opacity: 1,
        x: 0,
        transition: { delay: 0.4 },
    })

    return (
        <Wrap initial="initial" exit="out" variants={props.pageVariants} animate={controls}>
            <AnimateSharedLayout type="crossfade">
                <Router>
                    <Route path={['/portfolio/:id', '/portfolio']} component={Store} />
                </Router>
            </AnimateSharedLayout>
        </Wrap>
    )
}

export default Portfolio
