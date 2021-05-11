import React from 'react'
import { PaginateButtons, PaginateBtn } from './Portfolio.elements'

const Pagination = ({ totalPortfolioItems, itemsPerPage, pagination, currentPage }) => {
    const pages = []

    for (let i = 1; i <= Math.ceil(totalPortfolioItems / itemsPerPage); i++) {
        pages.push(i)
    }

    return (
        <PaginateButtons>
            {pages.map((number) => (
                <PaginateBtn
                    key={number}
                    onClick={() => pagination(number)}
                    className={number === currentPage ? 'active' : ''}></PaginateBtn>
            ))}
        </PaginateButtons>
    )
}

export default Pagination
