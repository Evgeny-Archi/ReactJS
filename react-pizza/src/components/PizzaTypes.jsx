import React, { useState } from 'react'
import classNames from 'classnames'

const PizzaTypes = ({ pizzaTypes }) => {
    const types = ['тонкое', 'традиционное']
    const [active, setActive] = useState(pizzaTypes[0])

    return types.map((type, i) => (
        <li
            onClick={() => setActive(i)}
            key={i}
            className={classNames({
                active: active === i,
                disabled: !pizzaTypes.includes(i),
            })}>
            {type}
        </li>
    ))
}

export default PizzaTypes
