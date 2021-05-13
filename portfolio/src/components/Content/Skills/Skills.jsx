import React from 'react'
import icons from '../../../assets/sprite.svg'
import { Wrap, SkillsContent, SkillsIcons, SkillsSVG, IconsWrap, Footer } from './Skills.elements'

const Skills = (props) => {
    return (
        <Wrap initial="initial" animate="in" exit="out" variants={props.pageVariants}>
            <SkillsContent>
                <SkillsIcons>
                    <IconsWrap data-id="HTML 5" color={'#15aabf'}>
                        <SkillsSVG colored color={'#15aabf'}>
                            <use xlinkHref={`${icons}#html_5`} />
                        </SkillsSVG>
                    </IconsWrap>
                    <IconsWrap data-id="CSS 3" color={'#f783ac'}>
                        <SkillsSVG colored color={'#f783ac'}>
                            <use xlinkHref={`${icons}#css_3`} />
                        </SkillsSVG>
                    </IconsWrap>
                    <IconsWrap data-id="JavaScript" color={'#fd7e14'}>
                        <SkillsSVG colored color={'#fd7e14'}>
                            <use xlinkHref={`${icons}#js`} />
                        </SkillsSVG>
                    </IconsWrap>
                    <IconsWrap data-id="React" color={'#4c6ef5'}>
                        <SkillsSVG colored color={'#4c6ef5'}>
                            <use xlinkHref={`${icons}#react`} />
                        </SkillsSVG>
                    </IconsWrap>
                </SkillsIcons>

                <Footer>
                    Hardcoded by{' '}
                    <a
                        href="https://github.com/Evgeny-Archi/ReactJS/tree/master/portfolio"
                        title="link to gitHub on this site source code"
                        target="_blank"
                        rel="noreferrer">
                        me
                    </a>
                </Footer>
            </SkillsContent>
        </Wrap>
    )
}

export default Skills
