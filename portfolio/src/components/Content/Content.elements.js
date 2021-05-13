import styled, { css, keyframes } from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Main = styled.main`
    display: flex;
    justify-content: center;
`
export const ContentWrap = styled.div`
    text-align: center;
    height: 100%;
    width: 100%;
    padding: 60px 0 20px 0;
`

export const Header = styled.div`
    position: absolute;
    top: ${(props) => (props.position ? '50%' : '10vh')};
    left: 50%;
    transform: translate(-50%, -50%);
    transition: top 0.3s ease;
    width: 100%;

    @media screen and (max-width: 500px) {
        top: ${(props) => (props.position ? '50%' : '14vh')};
    }
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
    font-weight: 300;
    letter-spacing: 0.1em;
    pointer-events: none;
    font-size: 2em;

    @media screen and (max-width: 768px) {
        font-size: 1.8em;
    }
`

const horizontalBounce = keyframes`
    0%   { transform: scale(0)      translateX(0) }
   10%  { transform: scale(.8)     translateX(0) }
   30%  { transform: scale(1.1,.9)   translateX(-50px) }
   50%  { transform: scale(.95,1.05) translateX(0) }
   57%  { transform: scale(1,1)      translateX(-7px) }
   64%  { transform: scale(1,1)      translateX(0) }
   100% { transform: scale(1,1)      translateX(0) }
`

const fullScreenAnimation = () => css`
    animation: ${horizontalBounce} 2s cubic-bezier(0.28, 0.84, 0.42, 1);
`

const verticalBounce = keyframes`
    0%   { transform: scale(0)      translateY(0) translateX(-50%) }
   10%  { transform: scale(.8)     translateY(0) translateX(-50%) }
   30%  { transform: scale(.9,1.1)   translateY(-50px) translateX(-50%) }
   50%  { transform: scale(1.05,.95) translateY(0) translateX(-50%) }
   57%  { transform: scale(1,1)      translateY(-7px) translateX(-50%) }
   64%  { transform: scale(1,1)      translateY(0) translateX(-50%) }
   100% { transform: scale(1,1)      translateY(0) translateX(-50%) }
`

const mobileScreenAnimation = () => css`
    animation: ${verticalBounce} 2s cubic-bezier(0.28, 0.84, 0.42, 1);
`

export const Logo = styled.img`
    width: ${(props) => props.width};
    height: auto;
    border-radius: 50%;
    border: 2px solid ${(props) => props.theme.lightColor};
    position: absolute;
    top: ${(props) => (props.top ? 'calc(50% - 50px)' : '15px')};
    left: ${(props) => (props.left ? 'calc(50% - 280px)' : '20px')};
    ${(props) => (props.animation ? fullScreenAnimation : 'none')};
    transition: all 0.3s ease;

    @media screen and (max-width: 768px) {
        top: ${(props) => (props.top ? '20%' : '10px')};
        left: ${(props) => (props.left ? '50%' : '10%')};
        transform: translateX(-50%);
        ${(props) => (props.animation ? mobileScreenAnimation : 'none')};
    }
`
