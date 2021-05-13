import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

export const Wrap = styled(motion.div)`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SkillsContent = styled.div`
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export const SkillsIcons = styled.div`
    width: 30vw;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    position: relative;

    @media screen and (max-width: 500px) {
        width: 50%;
    }
`

export const SkillsSVG = styled.svg`
    width: 100px;
    height: 100px;
    padding: 5px;
    fill: ${(props) => props.theme.lightColor};
    fill-opacity: 0.6;
    transition: fill-opacity 0.3s ease;

    ${(props) =>
        props.colored &&
        css`
            fill: ${(props) => props.color};
        `}

    &:hover {
        fill-opacity: 0.8;
    }

    @media screen and (max-width: 375px) {
        width: 60px;
        height: 60px;
    }
`

export const Tooltip = styled.div`
    position: absolute;
    bottom: -60px;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    background: ${(props) => props.theme.lightColor};
    color: ${(props) => props.theme.color};
    line-height: 30px;
`
