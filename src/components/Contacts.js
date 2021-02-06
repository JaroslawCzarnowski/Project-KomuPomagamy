import React from 'react';
import Decoration from '../assets/icons/Decoration.svg';
import BackgroundContactForm from '../assets/image/Background-Contact-Form.jpg';

const Contact = () => {  
    return (
        <div className="contact-container" id="contact">
            <div className="contact-left-side">
                <img className="contact-left-side__image" src={BackgroundContactForm} alt="form-background"/>                
            </div>
            <div className="contact-right-side">
                <p>Skontaktuj się z nami</p>
                    <img src={Decoration} alt="decor" className="who-we-help-top__decoration" />
                <form className="contact-form">
                    <div className="contact-form-fields">
                        <label className="contact-form-input--label">Wpisz swoje imię
                            <input id="nameField" className="contact-form-input--input" type="name" name="firstName"></input>
                            </label>
                        <label className="contact-form-input--label">Wpisz swój email
                            <input id="emailField" className="contact-form-input--input" type="email"></input>
                        </label>                                             
                    </div>      
                    <div className="contact-form-fields">
                    <label className="contact-form-input--label">Wpisz swoją wiadomość
                            <text id="messageField" className="contact-form-input--input"></text>
                        </label> 
                    </div>                               
                    <button className="btn form-submit-button">Wyślij</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;