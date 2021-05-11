import React from 'react'
import portfolio from '../../../db.json'
import {
    Overlay,
    CloseLink,
    CardContentContainer,
    CardContent,
    CardFooter,
    Usage,
    CardImageContainer,
    CardImage,
    TitleContainer,
    Buttons,
    Button,
} from './Portfolio.elements'

const Item = ({ id }) => {
    const { title, description, imageUrl, codeUrl, previewUrl, usage } = portfolio.find(
        (item) => item.id === id,
    )

    return (
        <>
            <Overlay
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.15 } }}
                transition={{ duration: 0.2, delay: 0.15 }}
                style={{ pointerEvents: 'auto' }}>
                <CloseLink to="/portfolio" />
            </Overlay>

            <CardContentContainer className="open">
                <CardContent layoutId={`${CardContent}-${id}`}>
                    <CardImageContainer layoutId={`${CardImageContainer}-${id}`}>
                        <CardImage src={imageUrl} alt={`${title} thumbnail`} />
                    </CardImageContainer>
                    <TitleContainer layoutId={`${TitleContainer}-${id}`}>
                        <h2>{title}</h2>
                        <br />
                        <span>{description}</span>
                    </TitleContainer>
                    <CardFooter>
                        <Usage>
                            {usage.map((item, i) => (
                                <span key={i}>{item}</span>
                            ))}
                        </Usage>
                        <Buttons>
                            <Button href={codeUrl} data-content="Code" target="_bllank">
                                <span>Code</span>
                            </Button>
                            <Button href={previewUrl} data-content="Demo" target="_bllank">
                                <span>Demo</span>
                            </Button>
                        </Buttons>
                    </CardFooter>
                </CardContent>
            </CardContentContainer>
        </>
    )
}

export default Item
