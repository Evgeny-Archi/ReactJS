import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ContentWrap = styled.div`
    text-align: center;
    max-height: 80vh;
    margin-bottom: 20px;
`

export const Navbar = styled.nav`
    margin-bottom: 10px;
`

export const NavbarLink = styled(NavLink)`
    color: #009cff;
    padding: 0 5px;
    font-weight: 300;

    &:hover {
        color: #fe4a49;
    }

    &.active {
        color: #fe4a49;
        text-decoration: none;
    }
`
export const Title = styled.h1`
    font-weight: 400;
    letter-spacing: 0.1em;
    pointer-events: none;
`
