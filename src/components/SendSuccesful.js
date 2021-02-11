import React from 'react';
import bear from '../assets/image/Background-Form.jpg';
import Decoration from '../assets/icons/Decoration.svg';

const  SendSuccesful = () => {  

    return (           
            <div className="step-bottom-container">
                <div className="step-bottom-left">
                  <p>Dziękujemy za przesłanie formularza. Na maila prześlemy wszelkie informacje o odbiorze</p>
                  <img src={Decoration} alt="decor" className="header-right-side--content__decoration" />        
                </div>
                <div className="step-bottom-right">
                    <img src={bear} alt="bear"/>
                </div>
            </div>       
    )
}

export default SendSuccesful
