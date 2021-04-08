import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.scss'
import {addPost} from './state/state'

export const rerender = (state) => {
    ReactDOM.render(
        <App appState={state} addPost={addPost} />,
        document.getElementById('root')
    )
}