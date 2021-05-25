import React, { useState } from 'react'
import Input from './Input'
import Verdict from './Verdict'

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9)
}

function toFarenheit(celsius) {
    return celsius * (9 / 5) + 32
}

function tryConvert(temp, convert) {
    const input = parseFloat(temp)
    if (Number.isNaN(input)) {
        return ''
    }
    const output = convert(input)
    const rounded = Math.round(output * 1000) / 1000
    return rounded.toString()
}

const Quiz = () => {
    const [temp, setTemp] = useState('')
    const [scale, setScale] = useState('c')

    const handleCelsiusChange = (temperature) => {
        setTemp(temperature)
        setScale('c')
    }

    const handleFahrenheitChange = (temperature) => {
        setTemp(temperature)
        setScale('f')
    }

    const celsius = scale === 'f' ? tryConvert(temp, toCelsius) : temp
    const farenheit = scale === 'c' ? tryConvert(temp, toFarenheit) : temp

    return (
        <div>
            <Input scale="c" temp={celsius} onChangeInput={handleCelsiusChange} />
            <Input scale="f" temp={farenheit} onChangeInput={handleFahrenheitChange} />
            <Verdict temp={parseFloat(celsius)} />
        </div>
    )
}

export default Quiz
