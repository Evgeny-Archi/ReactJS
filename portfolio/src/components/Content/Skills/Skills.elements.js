import styled, { css, keyframes } from 'styled-components'
import { motion } from 'framer-motion'

export const Wrap = styled(motion.div)`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SkillsContent = styled.div`
    height: 80%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export const SkillsIcons = styled.div`
    width: 60%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
`

const fade = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

export const IconsWrap = styled.div`
    &:after {
        content: attr(data-id);
        display: none;
        padding: 5px 15px;
        position: absolute;
        bottom: -40px;
        left: 50%;
        transform: translateX(-50%);
        background: ${(props) => props.color};
        color: #fff;
        border-radius: 6px;
        animation: ${fade} 0.6s ease;
    }

    &:hover:after {
        display: block;
    }
`

export const SkillsSVG = styled.svg`
    width: 100px;
    height: 100px;
    padding: 5px;
    margin: 0 10px;
    fill: ${(props) => props.theme.lightColor};
    fill-opacity: 0.6;
    transition: fill-opacity 0.3s ease;

    ${(props) =>
        props.colored &&
        css`
            fill: ${(props) => props.color};
        `}

    &:hover {
        fill-opacity: 1;
    }

    @media screen and (max-width: 420px) {
        width: 60px;
        height: 60px;
    }
`

export const Footer = styled.div`
    width: 30%;
    padding-top: 30px;
    border-top: 1px dashed ${(props) => props.theme.lightColor};
`
