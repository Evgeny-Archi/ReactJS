import s from './Posts.scss'
import Post from './Post/Post'

const postData = [
    {id: 1, message: 'First post.', likesCount: 12},
    {id: 2, message: 'Second post.', likesCount: 5},
    {id: 3, message: 'Third post.', likesCount: 0},
]

const postElements = postData.map(post => <Post key={post.id} message={post.message} />)

export default function Posts() {
    return (
        <div className=''>
            { postElements }
        </div>
    )
}