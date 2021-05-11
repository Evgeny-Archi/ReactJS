import React from "react"
import classes from './MenuToggle.module.css'

export default function MenuToggle(props) {
    const cls = [
        classes.MenuToggle
    ]

    if (props.isOpen) {
        cls.push(classes.open)
    }

    return (
        <div className={cls.join(' ')}>
            {props.isOpen
                ? <span className={classes.icon} onClick={props.onToggle}>&times;</span>
                : <span className={classes.icon} onClick={props.onToggle}>&#9776;</span>}
        </div>
    )
}