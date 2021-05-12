import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export const Wrap = styled(motion.div)`
    height: 100%;
`

export const Body = styled(motion.div)`
    position: absolute;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(${(props) => props.gridColumns}, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 40px;
    padding: 20px 5% 20px 5%;
`

export const CardItem = styled.div`
    height: 100%;
    position: relative;
`

export const CardOpenLink = styled(Link)`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`

export const CardContent = styled(motion.div)`
    pointer-events: auto;
    position: relative;
    border: 1px solid ${(props) => props.theme.lightColor};
    background: ${(props) => props.theme.cardBg};
    overflow: hidden;
    width: 100%;
    height: 100%;
    margin: 0 auto;
`

export const CardImageContainer = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    width: 40vw;
    height: 420px;
`

export const TitleContainer = styled(motion.div)`
    position: absolute;
    top: 15px;
    right: 0;
    text-align: right;

    h2 {
        display: inline-block;
        padding: 10px;
        background: rgba(78, 78, 77, 0.8);
        color: #f4f4f8;
        box-shadow: -2px 5px 10px rgba(78, 78, 77, 0.8);
        font-size: 1.4em;
        margin-bottom: 10px;

        @media screen and (max-width: 768px) {
            font-size: 1.2em;
        }
    }
    span {
        display: inline-block;
        padding: 10px;
        background: rgba(78, 78, 77, 0.8);
        color: #f4f4f8;
        box-shadow: -2px 5px 10px rgba(78, 78, 77, 0.8);
    }
`

export const CardImage = styled.img`
    width: 100%;
    height: auto;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);

    @media screen and (max-width: 1024px) {
        width: auto;
    }

    @media screen and (max-width: 768px) {
        width: 180%;
    }

    @media screen and (max-width: 500px) {
        width: 260%;
    }
`

export const CardContentContainer = styled(motion.div)`
    width: 100%;
    height: 100%;
    position: relative;
    display: block;
    pointer-events: none;
`

/* Opened card */
export const OpenedCardContentContainer = styled(CardContentContainer)`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`
export const OpenedCardContent = styled(CardContent)`
    height: auto;
    max-width: 40vw;
    overflow: hidden;

    @media screen and (max-width: 1024px) {
        max-width: 65vw;
    }

    @media screen and (max-width: 500px) {
        max-width: 85vw;
    }
`
export const OpenedCardImageContainer = styled(CardImageContainer)`
    z-index: 1;
`
export const OpenedTitleContainer = styled(TitleContainer)`
    top: 60%;
    right: 0;
    z-index: 1;
`

export const CardFooter = styled(motion.div)`
    padding-top: 450px;
    width: 100%;

    @media screen and (max-width: 500px) {
        padding-top: 400px;
    }
`
/* --- */

export const Usage = styled.div`
    text-align: right;
    margin-right: 10px;
    margin-bottom: 20px;

    span {
        font-size: 0.8em;
        padding: 5px 8px;
        margin: 0 5px;
        color: ${(props) => props.theme.body};
        background: ${(props) => props.theme.color};
    }
`

export const Buttons = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    overflow: hidden;
`

export const Button = styled.a`
    font-size: 0.8em;
    display: inline-block;
    flex: 1;
    line-height: 50px;
    color: #f4f4f8;
    background: #64826f;
    text-decoration: none;
    letter-spacing: 1.4px;
    position: relative;

    &:last-child {
        background: #646f82;
    }
    span {
        display: inline-block;
        transition: 0.3s;
    }
    &:before {
        content: attr(data-content);
        position: absolute;
        top: -100%;
        left: 0;
        width: 100%;
        background: #517557;
        transition: 0.3s;
    }
    &:last-child:before {
        background: #515975;
    }
    &:hover {
        color: #fff;
    }
    &:hover span {
        transform: translateY(100%);
    }
    &:hover:before {
        top: 0;
    }
`

export const Overlay = styled(motion.div)`
    z-index: 1;
    position: fixed;
    background: rgba(78, 78, 76, 0.3);
    will-change: opacity;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100vw;
    height: 115vh;
`

export const CloseLink = styled(Link)`
    display: block;
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100vw;
    left: 50%;
    transform: translateX(-50%);
`

export const PaginateButtons = styled.div`
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
`

export const PaginateBtn = styled.button`
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 0 3px;
    border: none;
    background: ${(props) => props.theme.lightColor};
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background: ${(props) => props.theme.accentColor};
    }

    &.active {
        width: 30px;
        background: ${(props) => props.theme.accentColor};
    }
`

export const CloseButtonWrap = styled(motion.div)`
    position: absolute;
    top: 10px;
    right: 0;
    z-index: 2;
`

export const CloseButton = styled(Link)`
    display: inline-block;
    padding: 0 10px 2px 10px;
    background: rgba(78, 78, 77, 0.6);
    color: #f4f4f8;
    font-size: 2.4em;
    box-shadow: -2px 5px 10px rgba(78, 78, 77, 0.6);
    text-decoration: none;
`
