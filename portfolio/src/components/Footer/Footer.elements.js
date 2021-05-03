import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const FooterWrap = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const FooterSVG = styled.svg`
    width: 26px;
    height: 26px;
    fill: ${(props) => props.theme.lightColor};
    transition: fill 0.2s linear;
`

export const FooterLink = styled(NavLink)`
    text-decoration: none;
    padding: 0 10px;

    &:hover > ${FooterSVG} {
        fill: ${(props) => props.theme.accentColor};
    }
`
