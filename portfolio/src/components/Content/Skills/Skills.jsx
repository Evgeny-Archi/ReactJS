import React, { useState } from 'react'
import icons from '../../../assets/sprite.svg'
import { Wrap, SkillsContent, SkillsIcons, SkillsSVG, Tooltip } from './Skills.elements'

const Skills = (props) => {
    const [show, setShow] = useState(false)
    const [tooltip, setTooltip] = useState('')

    const showToolip = () => {
        setShow(true)
    }

    const hideTooltip = () => {
        setShow(false)
        setTooltip('')
    }

    const tooltipHandler = (e) => {
        if (e.target.tagName === 'svg') {
            setTooltip(e.target.dataset.id)
        }
    }

    return (
        <Wrap initial="initial" animate="in" exit="out" variants={props.pageVariants}>
            <SkillsContent>
                <SkillsIcons
                    onMouseEnter={showToolip}
                    onMouseLeave={hideTooltip}
                    onMouseMove={tooltipHandler}>
                    <SkillsSVG colored color={'#15aabf'} data-id="HTML 5">
                        <use xlinkHref={`${icons}#html_5`} />
                    </SkillsSVG>
                    <SkillsSVG colored color={'#f783ac'} data-id="CSS 3">
                        <use xlinkHref={`${icons}#css_3`} />
                    </SkillsSVG>
                    <SkillsSVG colored color={'#fd7e14'} data-id="JavaScript">
                        <use xlinkHref={`${icons}#js`} />
                    </SkillsSVG>
                    <SkillsSVG colored color={'#4c6ef5'} data-id="React">
                        <use xlinkHref={`${icons}#react`} />
                    </SkillsSVG>

                    {show && <Tooltip>{tooltip}</Tooltip>}
                </SkillsIcons>

                <div>
                    Hardcoded by{' '}
                    <a
                        href="https://github.com/Evgeny-Archi/ReactJS/tree/master/portfolio"
                        title="link to gitHub on this site source code"
                        target="_blank"
                        rel="noreferrer">
                        me
                    </a>
                </div>
            </SkillsContent>
        </Wrap>
    )
}

export default Skills
