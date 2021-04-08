import s from './Posts.scss'
import Post from './Post/Post'
import React from 'react'

export default function Posts(props) {
    const postElements = props.posts.map(post => <Post key={post.id} message={post.message} />)

    const newPostElement = React.createRef()

    const addPost = (cb) => {
        cb(newPostElement.current.value)
        newPostElement.current.value = ''
    }

    return (
        <div className=''>
            <div>
                <textarea ref={newPostElement}></textarea>
                <button onClick={ () => addPost(props.addPost) }>Add post</button>
            </div>
            { postElements }
        </div>
    )
}