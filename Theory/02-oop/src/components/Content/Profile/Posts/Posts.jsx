import s from './Posts.scss'
import Post from './Post/Post'
import React from 'react'
import { addPostActionCreator, postChangeCreator } from '../../../../state/profile-reducer'

export default function Posts(props) {
    const postElements = props.state.posts.map(post => <Post key={post.id} message={post.message} />)
    const newPostElement = React.createRef()

    const addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    const onPostChange = () => {
        props.dispatch(postChangeCreator(newPostElement.current.value))
    }

    return (
        <div className=''>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.state.newPostText} />
                <button onClick={addPost}>Add post</button>
            </div>
            { postElements }
        </div>
    )
}