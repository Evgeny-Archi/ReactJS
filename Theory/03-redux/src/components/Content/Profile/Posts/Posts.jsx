import s from './Posts.scss'
import Post from './Post/Post'
import React from 'react'

export default function Posts(props) {
    const postElements = props.posts.map(post => <Post key={post.id} message={post.message} />)
    const newPostElement = React.createRef()

    const addPost = () => {
        props.addPost()
    }

    const onPostChange = () => {
        props.updateNewPostText(newPostElement.current.value)
    }

    return (
        <div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                <button onClick={addPost}>Add post</button>
            </div>
            { postElements }
        </div>
    )
}