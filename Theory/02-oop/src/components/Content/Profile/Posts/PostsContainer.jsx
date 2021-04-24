import Posts from './Posts'
import React from 'react'
import { addPostActionCreator, postChangeCreator } from '../../../../state/profile-reducer'
import StoreContext from "../../../../StoreContext";

export default function PostsContainer() {

    return (
        <StoreContext.Consumer>
            { (store) => {
                const addPost = () => {
                    store.dispatch(addPostActionCreator())
                }

                const onPostChange = (text) => {
                    const action = postChangeCreator(text)
                    store.dispatch(action)
                }

                return <Posts updateNewPostText={onPostChange} addPost={addPost} posts={store.getState().profile.posts}
                       newPostText={store.getState().profile.newPostText}/>
            }
        }
        </StoreContext.Consumer>
    )
}