import React from 'react';
import {withRouter} from 'react-router-dom'

const Car = (props) => {
    return (
        <div className={props.className} onClick={() => props.history.push('/cars/' + props.title.toLowerCase())}>
            <h1>Name: {props.title}</h1>
            <p>Year: {props.year}</p>
        </div>
    );
};

export default withRouter(Car);