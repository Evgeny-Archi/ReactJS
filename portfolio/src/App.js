import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { lightTheme, darkTheme } from './components/Themes/Themes'
import { useDarkMode } from './components/Themes/useDarkMode'
import GlobalStyle from './components/globalStyle'
import { ThemeProvider } from 'styled-components'
import { Header, Content, Footer } from './components'
import { Logo } from './components/Content/Content.elements'
import logo from './assets/me.jpg'

const App = () => {
    const [theme, themeToggler] = useDarkMode()
    const themeMode = theme === 'light' ? lightTheme : darkTheme

    const location = useLocation()
    const slideOnTop = location.pathname === '/' ? true : false

    const [isAvatar, setAvatar] = useState(false)
    const showAvatar = () => {
        setAvatar(true)
    }

    const logoConfig = {
        display: isAvatar || !slideOnTop ? 'block' : 'none',
        width: slideOnTop ? '100px' : '50px',
        top: slideOnTop ? 'calc(50% - 50px)' : '10px',
        left: slideOnTop ? 'calc(50% - 280px)' : '0',
        animation: slideOnTop,
    }

    return (
        <ThemeProvider theme={themeMode}>
            <GlobalStyle />
            <div className="grid">
                <Header theme={theme} toggleTheme={themeToggler} />
                <Content slideOnTop={slideOnTop} showAvatar={showAvatar} />
                <Footer />
                <Logo
                    src={logo}
                    alt="Avatar"
                    {...logoConfig}
                    style={{ display: logoConfig.display }}
                />
            </div>
        </ThemeProvider>
    )
}

export default App
