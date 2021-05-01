import React from 'react'
import { HeaderWrap, ToggleThemeDiv } from './Header.elements'
import ThemeButton from './ThemeButton'

const Header = () => {
    return (
        <HeaderWrap>
            <ToggleThemeDiv>
                <ThemeButton light />
            </ToggleThemeDiv>
        </HeaderWrap>
    )
}

export default Header
