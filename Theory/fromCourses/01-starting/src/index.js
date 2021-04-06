import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.scss'

const dialogsData = [
    {id: 1, name: 'Andrew Skot'},
    {id: 2, name: 'Dmitry Pak'},
    {id: 3, name: 'Sasha Ivanov'},
    {id: 4, name: 'Sveta Zlatova'},
    {id: 5, name: 'Viktor Sergeevich'},
    {id: 6, name: 'John Doe'},
    {id: 7, name: 'Aleksandr Korolev'},
    {id: 8, name: 'Bob Morgan'},
    {id: 9, name: 'Andrew Cruz'}
]

const messagesData = [
    {id: 1, message: 'first message'},
    {id: 2, message: 'second message'},
    {id: 3, message: 'third message'},
    {id: 4, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, porro!'},
    {id: 5, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid assumenda at corporis delectus dolorum eum ipsum nam neque, perferendis quia quibusdam quod reprehenderit sunt, velit veniam veritatis voluptatem, voluptatum!'},
    {id: 6, message: 'first message'}
]

const data = {dialogsData, messagesData}

ReactDOM.render(
    <App data={data} />,
    document.getElementById('root')
)
