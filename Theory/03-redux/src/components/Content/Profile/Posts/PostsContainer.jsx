import React from 'react'
import Posts from './Posts'
import { addPostActionCreator, postChangeCreator } from '../../../../state/profile-reducer'
import {connect} from "react-redux"

function mapStateToProps(state) {
    return {
        posts: state.profile.posts,
        newPostText: state.profile.newPostText
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text) => {
            const action = postChangeCreator(text)
            dispatch(action)
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer