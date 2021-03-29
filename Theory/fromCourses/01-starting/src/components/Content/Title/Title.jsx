import s from './Title.module.scss'

export default function (props) {
    return (
        <h2 className={s.title}>{props.title}</h2>
    )
}