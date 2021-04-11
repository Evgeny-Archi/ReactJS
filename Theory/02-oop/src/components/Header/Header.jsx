import s from './Header.module.scss'

function Header() {
    return (
        <header className={s.header}>
            <a href="/" className={s.header__logo}><span>EA</span></a>
            <span className={s.header__title}>First react app</span>
        </header>
    )
}

export default Header