import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.scss'
import state from './state/state'

ReactDOM.render(
    <App appState={state} />,
    document.getElementById('root')
)
