import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Wrap = styled(motion.div)`
    height: 100%;
    padding: 40px 5% 20px 5%;
`

export const Body = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 20px;
`

export const Item = styled(motion.div)`
    position: relative;
    border: 1px solid ${(props) => props.theme.lightColor};
    overflow: hidden;
    background: url(${(props) => props.bg}) no-repeat;
    background-position: top center;
    background-size: cover;
    text-align: right;
    padding: 20px 0 0 20px;
    transition: all 1.8s ease;
    cursor: pointer;

    &:hover {
        background-position: bottom center;
    }
`

export const Title = styled(motion.h3)`
    display: inline-block;
    padding: 10px;
    font-size: 1.2em;
    margin: 5px 0;
    background: rgba(78, 78, 77, 0.8);
    color: #f4f4f8;
    box-shadow: -2px 5px 10px rgba(78, 78, 77, 0.8);
`

export const Text = styled(Title)`
    font-size: 1em;
    font-weight: 400;
`

export const Modal = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    width: 500px;
    height: 400px;
`
