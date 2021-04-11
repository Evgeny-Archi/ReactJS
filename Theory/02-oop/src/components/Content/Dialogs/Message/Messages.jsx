import s from './../Dialogs.module.scss'

export default function Message(props) {
    return (
        <div className={s.messages_item}>{props.text}<span className={s.time}>11:37</span></div>
    )
}