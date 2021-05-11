import React, { useState } from 'react'
import classNames from 'classnames'

const PizzaSizes = ({ pizzaSizes }) => {
    const sizes = [26, 30, 40]
    const [active, setActive] = useState(pizzaSizes[0])

    return sizes.map((size, i) => (
        <li
            onClick={() => setActive(size)}
            key={i}
            className={classNames({
                active: active === size,
                disabled: !pizzaSizes.includes(size),
            })}>
            {size} см.
        </li>
    ))
}

export default PizzaSizes
