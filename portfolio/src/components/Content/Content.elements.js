import styled, { css, keyframes } from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
`
export const ContentWrap = styled.div`
    text-align: center;
    max-height: 80vh;
`

export const Header = styled.div`
    position: absolute;
    top: ${(props) => (props.position ? '50%' : '10vh')};
    left: 50%;
    transform: translate(-50%, -50%);
    transition: top 0.3s ease;
`

export const Navbar = styled.nav`
    margin-bottom: 10px;
`

export const NavbarLink = styled(NavLink)`
    padding: 0 5px;
    font-weight: 300;

    &.active {
        color: #fe4a49;
        text-decoration: none;
    }
`
export const Title = styled.h1`
    font-weight: 400;
    letter-spacing: 0.1em;
    pointer-events: none;
    font-size: 2em;
`

const bounce = keyframes`
    0%   { transform: scale(0)      translateX(0) }
   10%  { transform: scale(.8)     translateX(0) }
   30%  { transform: scale(1.1,.9)   translateX(-50px) }
   50%  { transform: scale(.95,1.05) translateX(0) }
   57%  { transform: scale(1,1)      translateX(-7px) }
   64%  { transform: scale(1,1)      translateX(0) }
   100% { transform: scale(1,1)      translateX(0) }
`

const animation = () => css`
    animation: ${bounce} 2s cubic-bezier(0.28, 0.84, 0.42, 1);
`

export const Logo = styled.img`
    width: ${(props) => props.width};
    height: auto;
    border-radius: 50%;
    border: 2px solid ${(props) => props.theme.lightColor};
    position: absolute;
    top: ${(props) => props.top};
    left: ${(props) => props.left};
    ${(props) => (props.animation ? animation : 'none')};
    transition: all 0.3s ease;
`
