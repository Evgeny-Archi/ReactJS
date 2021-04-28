import React from 'react';

const CarDetails = (props) => {
    return (
        <div style={{textAlign: 'center'}}>
            <h1>{props.match.params.name}</h1>
        </div>
    );
};

export default CarDetails;