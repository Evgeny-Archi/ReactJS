import s from './Dialogs.module.scss'
import Title from '../Title/Title'
import DialogUsers from './DialogUsers/DialogUsers'
import Messages from './Message/Messages'

// const dialogsElements = props.data.dialogsData.map(dialog => <DialogUsers key={dialog.id} name={dialog.name} id={dialog.id} />)
// const messagesElements = props.data.messagesData.map(message => <Messages key={message.id} text={message.message} />)

export default function Dialogs(props) {
    const dialogsData = props.dialogs
    const messagesData = props.messages
    return (
        <div>
            <Title title="Dialogs" />
            <div className={s.dialogs_wrap}>
                <div className={s.dialogs}>
                    { dialogsData.map(dialog => <DialogUsers key={dialog.id} name={dialog.name} id={dialog.id} />) }
                </div>
                <div className={s.messages}>
                    { messagesData.map(message => <Messages key={message.id} text={message.message} />) }
                </div>
            </div>
        </div>
    )
}