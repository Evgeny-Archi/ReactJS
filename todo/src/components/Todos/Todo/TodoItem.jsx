import classes from './TodoItem.module.css'
import React, { useState } from 'react'
import Button from '../../UI/Button'
import Input from '../../UI/Input'

const TodoItem = (props) => {
    const [editing, setEditing] = useState(false)
    const [value, setValue] = useState(props.text)

    const changeHandler = () => {
        setEditing(true)
    }

    const handleChangeValue = (e) => {
        setValue(e.target.value)
    }

    const saveHandler = (id) => {
        props.saveTodo(id, value)
        setEditing(false)
    }

    return (
        <div className={classes.todo_item}>
            <div style={{ width: '100%' }}>
                {!editing ? (
                    <Input
                        id={props.id}
                        type="checkbox"
                        checked={props.completed}
                        onChange={props.checkHandler}
                        label={value}
                    />
                ) : (
                    <Input
                        id={props.id}
                        type="text"
                        checked={props.completed}
                        onChange={handleChangeValue}
                        value={value}
                    />
                )}
            </div>
            <div style={{ display: 'flex' }}>
                {!editing ? (
                    <Button onClick={changeHandler}>Change</Button>
                ) : (
                    <Button onClick={saveHandler.bind(null, props.id)}>Save</Button>
                )}
                &nbsp;
                <Button type="error" onClick={props.deleteHandler.bind(null, props.id)}>
                    Delete
                </Button>
            </div>
        </div>
    )
}

export default TodoItem
