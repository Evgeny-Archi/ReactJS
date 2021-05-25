import React, { useState, useEffect } from 'react'
import Button from '../../UI/Button'
import Input from '../../UI/Input'
import classes from './Form.module.css'
import { connect } from 'react-redux'

const Form = (props) => {
    const [value, setValue] = useState('')
    const [invalid, setInvalid] = useState(true)

    const inputChangeHandler = (e) => {
        setValue(e.target.value)
    }

    const addTodoHandler = (e) => {
        e.preventDefault()
        if (value) {
            props.onAdd(value)
            setValue('')
        } else {
            return
        }
    }

    useEffect(() => {
        value.length > 0 ? setInvalid(false) : setInvalid(true)
    }, [value])

    return (
        <div className={classes.form_wrap}>
            <form className={classes.form} onSubmit={addTodoHandler}>
                <Input
                    type="text"
                    onChange={inputChangeHandler}
                    value={value}
                    placeholder="What to do?"
                />
                <Button type="primary" onClick={addTodoHandler} invalid={invalid}>
                    Add
                </Button>
            </form>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        onAdd: (value) =>
            dispatch({
                type: 'ADD_TODO',
                payload: {
                    id: Date.now(),
                    text: value,
                    completed: false,
                },
            }),
    }
}

export default connect(null, mapDispatchToProps)(Form)
