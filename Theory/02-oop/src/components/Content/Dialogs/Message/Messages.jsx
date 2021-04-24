import s from './../Dialogs.module.scss'
import React from "react";

export default function Message(props) {
    const inputChangeHandler = (event) => {
        props.onChangeInput(event.target.value)
    }

    const addNewMessageHandler = () => {
        props.onAddedMessage()
    }

    return (
        <>
            {props.data.map(item => <div key={item.id} className={s.messages_item}>{item.message}<span className={s.time}>11:37</span></div>)}
            <div className={s.input_wrap}>
                <input className={s.input} type="text" placeholder='Input some text' value={props.newMessageText} onChange={inputChangeHandler} />
                <button onClick={addNewMessageHandler}>Add message</button>
            </div>
        </>
    )
}