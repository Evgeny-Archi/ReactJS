import React from 'react'

const Verdict = (props) => {
    return <div>{props.temp >= 100 ? <p>Вода вскипит</p> : <p>Вода не вскипит</p>}</div>
}

export default Verdict
