import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.scss'
import {addPost, updateNewPostText} from './state/state'

export const rerender = (state) => {
    ReactDOM.render(
        <App appState={state} addPost={addPost} updateNewPost={updateNewPostText} />,
        document.getElementById('root')
    )
}