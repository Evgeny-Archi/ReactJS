import React from 'react'
import { PaginateButtons, PaginateBtn } from './Portfolio.elements'

const Pagination = ({ totalPortfolioItems, itemsPerPage, currentPage, paginate }) => {
    const pages = []

    for (let i = 0; i < Math.ceil(totalPortfolioItems / itemsPerPage); i++) {
        pages.push(i)
    }

    return (
        <PaginateButtons>
            {pages.map((number) => (
                <PaginateBtn
                    key={number}
                    onClick={() => paginate(number)}
                    className={number === currentPage ? 'active' : ''}></PaginateBtn>
            ))}
        </PaginateButtons>
    )
}

export default Pagination
