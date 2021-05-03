import React from 'react'
import { ThemeInput, ThemeLabel, ThemeSpan, ThemeSVG } from './Header.elements'
import icons from '../../assets/sprite.svg'

const ThemeButton = ({ theme, toggleTheme }) => {
    return (
        <>
            <ThemeInput type="checkbox" id="theme-mode" onChange={toggleTheme} />
            <ThemeLabel htmlFor="theme-mode">
                <ThemeSpan>
                    <ThemeSVG>
                        {theme === 'light' ? (
                            <use xlinkHref={`${icons}#theme_moon`} />
                        ) : (
                            <use xlinkHref={`${icons}#theme_sun`} />
                        )}
                    </ThemeSVG>
                </ThemeSpan>
            </ThemeLabel>
        </>
    )
}

export default ThemeButton
