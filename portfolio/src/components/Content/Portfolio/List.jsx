import React, { useState } from 'react'
import {
    Body,
    CardItem,
    CardContentContainer,
    CardContent,
    CardImageContainer,
    TitleContainer,
    CardOpenLink,
    CardImage,
} from './Portfolio.elements'
import portfolio from '../../../db.json'
import Pagination from './Pagination'

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

const List = ({ selectedId, forceUpdate }) => {
    const gridColumns = 3
    const gridRows = 2
    const [itemsPerPage] = useState(gridColumns * gridRows)
    const [currentPage, setCurrentPage] = useState(1)

    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = portfolio.slice(indexOfFirstItem, indexOfLastItem)

    const pagination = (number) => {
        setCurrentPage(number)
        forceUpdate()
    }

    return (
        <>
            <Body
                gridColumns={gridColumns}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={() => pagination(2)}>
                {currentItems.map((card) => (
                    <Card key={card.id} {...card} isSelected={card.id === selectedId} />
                ))}
            </Body>
            <Pagination
                totalPortfolioItems={portfolio.length}
                itemsPerPage={itemsPerPage}
                pagination={pagination}
                currentPage={currentPage}
            />
        </>
    )
}

export default List
