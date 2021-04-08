import s from './../Dialogs.module.scss'

export default function() {
    return (
        <div className={s.input_wrap}>
            <input className={s.input} type="text" placeholder='Input some text'/>
            <button>Add message</button>
        </div>
    )
}