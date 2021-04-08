import s from './Dialogs.module.scss'
import Title from '../Title/Title'
import DialogUsers from './DialogUsers/DialogUsers'
import Messages from './Message/Messages'
import InputField from './Message/InputField'

// const dialogsElements = props.data.dialogsData.map(dialog => <DialogUsers key={dialog.id} name={dialog.name} id={dialog.id} />)
// const messagesElements = props.data.messagesData.map(message => <Messages key={message.id} text={message.message} />)

export default function Dialogs(props) {
    const dialogsData = props.state.dialogs.map(dialog => <DialogUsers key={dialog.id} name={dialog.name} id={dialog.id} />)
    const messagesData = props.state.messages.map(message => <Messages key={message.id} text={message.message} />)
    return (
        <div>
            <Title title="Dialogs" />
            <div className={s.dialogs_wrap}>
                <div className={s.dialogs}>
                    { dialogsData }
                </div>
                <div className={s.messages}>
                    { messagesData }
                    <InputField />
                </div>
            </div>
        </div>
    )
}