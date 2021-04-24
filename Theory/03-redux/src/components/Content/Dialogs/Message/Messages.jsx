import s from './../Dialogs.module.scss'
import React from "react";

export default function Message(props) {

    return (
        <div className={s.messages_item}>{props.message}<span className={s.time}>11:37</span></div>
    )
}