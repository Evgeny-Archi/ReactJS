import s from './Post.scss'

export default function Post(props) {
    return (
        <p className='post'>{props.message}</p>
    )
}