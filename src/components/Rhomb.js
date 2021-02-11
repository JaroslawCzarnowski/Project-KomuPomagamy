import React from 'react';

const Rhomb = ({number, textRhomb}) => {
    return (
        <div className="rhomb-container">
            <div className="rhomb-content">
                <p>{number}</p>
                <div className="rhomb-text">{textRhomb}</div>
            </div>
            
        </div>
    )
}

export default Rhomb