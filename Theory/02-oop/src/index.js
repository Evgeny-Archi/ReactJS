import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.scss'
import store from './state/state'

const rerender = (state) => {
    ReactDOM.render(
        <App appState={state} addPost={store.addPost.bind(store)} updateNewPost={store.updateNewPostText.bind(store)} />,
        document.getElementById('root')
    )
}

rerender(store.getState())
store.subscribe(rerender)