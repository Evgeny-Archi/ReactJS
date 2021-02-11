import React from 'react'

// function Car() {
//     return (
//         <h2>Car component</h2>
//     )
// }

// const car = () => {
//     return (
//         <h2>Car component</h2>
//     )
// }

// const car = () => (
//     <h2>
//         Car component
//         <string>test</string>
//     </h2>
// )

const headStyle = {
    'color': 'blue'
}

export default (props) => (
    <div>
        { props.children }
        <h3 style={headStyle}>Car name: {props.name}</h3> 
        <p>Year: <strong>{props.year}</strong></p>
    </div>
)