import React from 'react'
import classNames from "classnames"

function Button({ className, outline, onClick, children }) {
    return (
        <button
            className={classNames('button', className, {
            'button--outline': outline
            })}
            onClick={onClick}
        >{children || 'Click'}</button>
    )
}

export default Button