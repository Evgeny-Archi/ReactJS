import s from './Posts.scss'
import Post from './Post/Post'

export default function Posts() {
    return (
        <div className=''>
            <Post message='First post.' />
            <Post message='Second post.' />
        </div>
    )
}