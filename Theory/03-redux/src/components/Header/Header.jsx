import s from './Header.module.scss'
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <header className={s.header}>
            <NavLink exact to='/' className={s.header__logo}><span>EA</span></NavLink>
            <span className={s.header__title}>First react app</span>
        </header>
    )
}

export default Header