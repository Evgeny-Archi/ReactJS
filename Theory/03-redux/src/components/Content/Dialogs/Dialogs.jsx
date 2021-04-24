import s from './Dialogs.module.scss'
import Title from '../Title/Title'
import DialogUsers from './DialogUsers/DialogUsers'
import Messages from './Message/Messages'
import React from "react";

export default function Dialogs(props) {
    const dialogs = props.dialogs.map(item => <DialogUsers key={item.id} id={item.id} name={item.name} />)
    const messages = props.messages.map(item => <Messages key={item.id} message={item.message} />)

    const inputChangeHandler = (event) => {
        props.onChangeInput(event.target.value)
    }

    const addNewMessageHandler = () => {
        props.onSendMessage()
    }

    return (
        <div>
            <Title title="Dialogs" />
            <div className={s.dialogs_wrap}>
                <div className={s.dialogs}>
                    { dialogs }
                </div>
                <div className={s.messages}>
                    { messages }
                    <div className={s.input_wrap}>
                        <input className={s.input} type="text" placeholder='Input some text' value={props.newMessageText} onChange={inputChangeHandler} />
                        <button onClick={addNewMessageHandler}>Add message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}