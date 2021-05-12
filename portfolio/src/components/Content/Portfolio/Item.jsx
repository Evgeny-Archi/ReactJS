import React from 'react'
import portfolio from '../../../db.json'
import {
    Overlay,
    CloseLink,
    CardContent,
    CardFooter,
    Usage,
    CardImageContainer,
    CardImage,
    TitleContainer,
    Buttons,
    Button,
    OpenedCardContentContainer,
    OpenedCardContent,
    OpenedCardImageContainer,
    OpenedTitleContainer,
    CloseButtonWrap,
    CloseButton,
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

            <OpenedCardContentContainer>
                <OpenedCardContent layoutId={`${CardContent}-${id}`}>
                    <OpenedCardImageContainer layoutId={`${CardImageContainer}-${id}`}>
                        <CardImage src={imageUrl} alt={`${title} thumbnail`} />
                    </OpenedCardImageContainer>
                    <OpenedTitleContainer layoutId={`${TitleContainer}-${id}`}>
                        <h2>{title}</h2>
                        <br />
                        <span>{description}</span>
                    </OpenedTitleContainer>
                    <CardFooter>
                        <Usage>
                            {usage.map((item, i) => (
                                <span key={i}>{item}</span>
                            ))}
                        </Usage>
                        <Buttons>
                            {codeUrl ? (
                                <Button href={codeUrl} data-content="Code" target="_bllank">
                                    <span>Code</span>
                                </Button>
                            ) : (
                                <Button
                                    href="#"
                                    data-content="Code"
                                    onClick={(e) => e.preventDefault()}>
                                    <span>Code</span>
                                </Button>
                            )}
                            <Button href={previewUrl} data-content="Demo" target="_bllank">
                                <span>Demo</span>
                            </Button>
                        </Buttons>
                    </CardFooter>
                    <CloseButtonWrap
                        exit={{ opacity: 0, y: '-100%' }}
                        transition={{ duration: 0.4 }}>
                        <CloseButton to="/portfolio">&times;</CloseButton>
                    </CloseButtonWrap>
                </OpenedCardContent>
            </OpenedCardContentContainer>
        </>
    )
}

export default Item
