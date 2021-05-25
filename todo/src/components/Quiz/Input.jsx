import React from 'react'

const scaleNames = {
    c: 'Цельсия',
    f: 'Фаренгейта',
}

const Input = (props) => {
    const handleChange = (e) => {
        props.onChangeInput(e.target.value)
    }

    return (
        <div>
            <fieldset>
                <legend>Введите температуру в градусах {scaleNames[props.scale]}:</legend>
                <input value={props.temp} onChange={handleChange} />
            </fieldset>
        </div>
    )
}

export default Input
