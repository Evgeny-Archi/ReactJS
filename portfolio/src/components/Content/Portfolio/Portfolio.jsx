import React from 'react'
import { useAnimation } from 'framer-motion'
import { Wrap, Body, Item, Title, Text } from './Portfolio.elements'
import portfolio from '../../../db.json'

const Portfolio = (props) => {
    const controls = useAnimation()

    controls.start({
        opacity: 1,
        x: 0,
        transition: { delay: 0.4 },
    })

    return (
        <Wrap
            initial="initial"
            animate="in"
            exit="out"
            variants={props.pageVariants}
            animate={controls}>
            <Body>
                {portfolio.map((item) => (
                    <Item bg={item.imageUrl} key={item.id}>
                        <Title>{item.title}</Title>
                        <br />
                        <Text>{item.description}</Text>
                    </Item>
                ))}
            </Body>
        </Wrap>
    )
}

export default Portfolio
