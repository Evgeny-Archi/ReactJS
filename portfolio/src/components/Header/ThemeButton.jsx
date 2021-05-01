import React, { useState } from 'react'
import { ThemeInput, ThemeLabel, ThemeSpan, ThemeSVG } from './Header.elements'
import icons from '../../assets/sprite.svg'

const ThemeButton = ({ light }) => {
    const [themeBtn, toggleTheme] = useState(light)

    const changeTheme = () => {
        toggleTheme(!themeBtn)
    }

    return (
        <>
            <ThemeInput type="checkbox" id="theme-mode" onChange={changeTheme} />
            <ThemeLabel htmlFor="theme-mode">
                <ThemeSpan>
                    <ThemeSVG ThemeColor={themeBtn}>
                        {themeBtn ? (
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
