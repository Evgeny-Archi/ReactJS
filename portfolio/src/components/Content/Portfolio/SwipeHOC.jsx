import React from 'react'
import { AnimatePresence } from 'framer-motion'
import Pagination from './Pagination'
import { Body } from './Portfolio.elements'

const variants = {
    enter: {
        opacity: 0,
    },
    // enter: (direction) => {
    //     return {
    //         x: direction > 0 ? 2000 : -2000,
    //         opacity: 0,
    //     }
    // },
    center: {
        x: 0,
        opacity: 1,
    },
    exit: (direction) => {
        return {
            x: direction < 0 ? 2000 : -2000,
            opacity: 0,
        }
    },
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity
}

const SwipeHOC = ({
    gridColumns,
    currentPage,
    direction,
    setCurrentPage,
    itemsPerPage,
    portfolioLength,
    children,
}) => {
    const swiping = (number) => {
        setCurrentPage([currentPage + number, number])
    }

    const paginate = (number) => {
        const direction = number > currentPage ? 1 : -1
        setCurrentPage([number, direction])
    }

    return (
        <>
            <AnimatePresence initial={false} custom={direction}>
                <Body
                    gridColumns={gridColumns}
                    key={currentPage}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    transition={{
                        opacity: { duration: 0.5 },
                    }}
                    whileTap={{ cursor: 'grabbing' }}
                    onDragEnd={(event, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x)

                        if (
                            swipe < -swipeConfidenceThreshold &&
                            currentPage < Math.floor(portfolioLength / itemsPerPage)
                        ) {
                            swiping(1)
                        } else if (swipe > swipeConfidenceThreshold && currentPage > 0) {
                            swiping(-1)
                        }
                    }}>
                    {children}
                </Body>
            </AnimatePresence>
            <Pagination
                totalPortfolioItems={portfolioLength}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                paginate={paginate}
            />
        </>
    )
}

export default SwipeHOC
