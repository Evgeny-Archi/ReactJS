import React from 'react'

function Categories({ items, onClick }) {
    const [activeItem, setActiveItem] = React.useState(null)

    const onSelectItem = (index) => {
        setActiveItem(index)
    }

    return (
        <div className="categories">
            <ul>
                <li className={activeItem === null ? 'active' : ''} onClick={() => setActiveItem(null)}>Все</li>
                { items && items.map((item, i) => (
                    <li className={activeItem === i ? 'active' : ''} key={`${item}_${i}`} onClick={() => onSelectItem(i)}>{item}</li>
                    )
                )}
            </ul>
        </div>
    )
}

export default Categories