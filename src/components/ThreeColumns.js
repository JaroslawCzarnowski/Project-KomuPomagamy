import React from 'react';

const ThreeColumns = () => {
    return (
        <div className="three_columns_container">
            <div className="three_columns_column">
                <p className="three_columns_number">8</p>
                <h3 className="three_columns_heading">oddanych worków</h3>
                <p className="three_columns_text">
                    Lorem ipsum dolor sit amet, consectetur adipisc 
                    Pellentesque vel enim a elit viverra elementuma.
                    Aliquam erat volutpat. 
                </p>
            </div>
            <div className="three_columns_column">
                <p className="three_columns_number">20</p>
                <h3 className="three_columns_heading">wspartych organizacji</h3>
                <p className="three_columns_text">
                    Lorem ipsum dolor sit amet, consectetur adipisc 
                    Pellentesque vel enim a elit viverra elementuma.
                    Aliquam erat volutpat. 
                </p>
            </div>
            <div className="three_columns_column">
                <p className="three_columns_number">40</p>
                <h3 className="three_columns_heading">zorganizowanych zbiórek</h3>
                <p className="three_columns_text">
                    Lorem ipsum dolor sit amet, consectetur adipisc 
                    Pellentesque vel enim a elit viverra elementuma.
                    Aliquam erat volutpat. 
                </p>
            </div>
        </div>
    )
}

export default ThreeColumns;