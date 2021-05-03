import React from 'react'
import { HeaderWrap, ToggleThemeDiv } from './Header.elements'
import ThemeButton from './ThemeButton'

const Header = ({ theme, toggleTheme }) => {
    return (
        <HeaderWrap>
            <ToggleThemeDiv>
                <ThemeButton theme={theme} toggleTheme={toggleTheme} />
            </ToggleThemeDiv>
        </HeaderWrap>
    )
}

export default Header
