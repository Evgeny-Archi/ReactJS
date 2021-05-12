import React, { useState } from 'react'
import SwipeHOC from './SwipeHOC'
import {
    CardItem,
    CardContentContainer,
    CardContent,
    CardImageContainer,
    TitleContainer,
    CardOpenLink,
    CardImage,
} from './Portfolio.elements'
import portfolio from '../../../db.json'

const Card = ({ id, title, description, imageUrl }) => {
    return (
        <CardItem>
            <CardContentContainer>
                <CardContent layoutId={`${CardContent}-${id}`}>
                    <CardImageContainer layoutId={`${CardImageContainer}-${id}`}>
                        <CardImage src={imageUrl} alt={`${title} thumbnail`} />
                    </CardImageContainer>
                    <TitleContainer layoutId={`${TitleContainer}-${id}`}>
                        <h2>{title}</h2>
                        <br />
                        <span>{description}</span>
                    </TitleContainer>
                </CardContent>
            </CardContentContainer>
            <CardOpenLink to={`/portfolio/${id}`} />
        </CardItem>
    )
}

const List = ({ selectedId }) => {
    const userWidth = window.innerWidth

    let gridColumns = 3
    if (userWidth <= 1024 && userWidth > 500) {
        gridColumns = 2
    } else if (userWidth <= 500) {
        gridColumns = 1
    }

    const [itemsPerPage] = useState(gridColumns * 2)
    const [[currentPage, direction], setCurrentPage] = useState([0, 0])

    const indexOfLastItem = (currentPage + 1) * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = portfolio.slice(indexOfFirstItem, indexOfLastItem)

    return (
        <SwipeHOC
            gridColumns={gridColumns}
            currentPage={currentPage}
            direction={direction}
            setCurrentPage={setCurrentPage}
            itemsPerPage={itemsPerPage}
            portfolioLength={portfolio.length}>
            {currentItems.map((card) => (
                <Card key={card.id} {...card} isSelected={card.id === selectedId} />
            ))}
        </SwipeHOC>
    )
}

export default List
