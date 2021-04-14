import s from './../Dialogs.module.scss'
import React from 'react'
import { dialogsInputCreator, addMessageDialogCreator } from './../../../../state/dialogs-reducer'

export default function(props) {

    const inputChangeHandler = (event) => {
        props.dispatch(dialogsInputCreator(event.target.value))
    }

    const addNewMessage = () => {
        props.dispatch(addMessageDialogCreator())
    }

    return (
        <div className={s.input_wrap}>
            <input className={s.input} type="text" placeholder='Input some text' value={props.state} onChange={inputChangeHandler} />
            <button onClick={addNewMessage}>Add message</button>
        </div>
    )
}