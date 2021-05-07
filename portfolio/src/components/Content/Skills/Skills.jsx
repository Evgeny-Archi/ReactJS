import React from 'react'
import { Wrap } from './Skills.elements'

const Skills = (props) => {
    return (
        <Wrap initial="initial" animate="in" exit="out" variants={props.pageVariants}>
            <div>
                <h2>Skills</h2>
            </div>
        </Wrap>
    )
}

export default Skills
