import s from './Posts.scss'
import Post from './Post/Post'

export default function Posts(props) {
    const postElements = props.posts.map(post => <Post key={post.id} message={post.message} />)
    return (
        <div className=''>
            { postElements }
        </div>
    )
}