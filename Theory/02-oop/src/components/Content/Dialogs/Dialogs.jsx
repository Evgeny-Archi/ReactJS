import s from './Dialogs.module.scss'
import Title from '../Title/Title'
import DialogsContainer from './DialogUsers/DialogsContainer'
import MessagesContainer from './Message/MessagesContainer'
import React from "react";

export default function Dialogs() {

    return (
        <div>
            <Title title="Dialogs" />
            <div className={s.dialogs_wrap}>
                <div className={s.dialogs}>
                    <DialogsContainer />
                </div>
                <div className={s.messages}>
                    <MessagesContainer />
                </div>
            </div>
        </div>
    )
}