import React from 'react'
import { FooterWrap, FooterLink, FooterSVG } from './Footer.elements'
import icons from '../../assets/sprite.svg'

const Footer = () => {
    return (
        <FooterWrap>
            <FooterLink
                as="a"
                href="https://github.com/Evgeny-Archi/"
                target="_blank"
                title="github.com">
                <FooterSVG>
                    <use xlinkHref={`${icons}#github`} />
                </FooterSVG>
            </FooterLink>
            <FooterLink
                as="a"
                href="https://www.instagram.com/evgeny.off/"
                target="_blank"
                title="instagram.com">
                <FooterSVG>
                    <use xlinkHref={`${icons}#instagram`} />
                </FooterSVG>
            </FooterLink>
            <FooterLink as="a" href="https://vk.com/e.archibasov" target="_blank" title="vk.com">
                <FooterSVG>
                    <use xlinkHref={`${icons}#vk`} />
                </FooterSVG>
            </FooterLink>
        </FooterWrap>
    )
}

export default Footer
