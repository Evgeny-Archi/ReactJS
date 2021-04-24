import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.scss'
import store from './state/redux-store'
import {Provider} from "./StoreContext";

const rerender = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
    )
}

rerender(store.getState())
store.subscribe(() => {
    rerender(store.getState())
})