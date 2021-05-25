import React from 'react'
import classes from './Input.module.css'

const Input = (props) => {
    const inputType = props.type || 'text'
    const cls = [classes.Input]

    return (
        <div className={cls.join(' ')}>
            <input
                id={props.id}
                type={inputType}
                placeholder={props.placeholder}
                onChange={props.onChange}
                value={props.value}
                checked={props.checked}
                style={{
                    width: inputType === 'text' ? '100%' : '',
                }}
            />
            &nbsp;
            <label htmlFor={props.id}>{props.label}</label>
        </div>
    )
}

export default Input
