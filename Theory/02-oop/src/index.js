import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.scss'
import store from './state/state'

const rerender = (state) => {
    ReactDOM.render(
        <App state={state} dispatch={store.dispatch.bind(store)} />,
        document.getElementById('root')
    )
}

rerender(store.getState())
store.subscribe(rerender)