import React from 'react'

function Categories({ items, onClick }) {
    const [state, setState] = React.useState()

    return (
        <div className="categories">
            <ul>
                <li className="active">Все</li>
                { items.map((item, i) => (
                    <li key={`${item}_${i}`} onClick={() => onClick(item)}>{item}</li>
                    )
                )}
            </ul>
        </div>
    )
}

export default Categories