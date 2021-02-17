import React, {useState} from 'react';
import Decoration from '../assets/icons/Decoration.svg';
import BackgroundContactForm from '../assets/image/Background-Contact-Form.jpg';
import {sendMessage} from '../API/Fetch';

const Contact = () => {  
    let [nameData, setNameData] = useState([]);
    let [emailData, setEmailData] = useState([]);
    let [messageData, setMessageData] = useState([]);

    const nullifyState = (setStateToClear) => {
        setTimeout(() => {
            setStateToClear([]);
        },0);
    }
    const handleValueInput = (param) => (e) => {
        console.log(e.target.value);
        param(e.target.value)
    }
    const handleMessageSubmit = (nameData, emailData, messageData, nameFieldId, emailFieldId, messageFieldId, 
        sendMessage, setNameData, setEmailData, setMessageData) => (e) => {
        e.preventDefault();       
    const newMessage = {           
            name: nameData,
            email: emailData,
            message: messageData           
        };  
            //for claearing fields after submit
    const formNameField = document.getElementById(nameFieldId);
    const formEmailField = document.getElementById(emailFieldId);
    const formMessageField = document.getElementById(messageFieldId);
            console.log(formEmailField);
            //clearing fields after submit
            formNameField.value = "";
            formEmailField.value = "";  
            formMessageField.value = "";           
        //form validation
        function validateNameInput(nameInput, emailInput, messageInput){
            let str = String(nameInput);            
            for( let i = 0; i < str.length; i++){                     
                if(!isNaN(str.charAt(i)) || str.charAt(i) === "-") {           //if the string is a number, do the following
                    return alert("imię nie może zawierać numerów ani spacji");                    
                }              
            }                     
            if (/[^a-zA-Z0-9\-/]/.test(nameInput)) {
                alert("znaki specjalne niedozwolone");
            }
            else if (messageInput.length <= 1 || nameInput.length <= 1) {
                alert("proszęsię upewnić że wszystkie pola są wypełnione");
            } 
            else if (nameData.length <= 1 || nameData.length > 30 || nameData.includes("/")) {
                alert("imię nie wpisane, za krótkie(conajmniej dwa znaki) lub za długie(max 30 znaków), nie może zawierać znaków specjalnych");
            }            
            else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(emailData) || emailInput.length <= 1) {
                alert("nieprawidłowy adres email");
            }           
            //set this to 120         
            else if (messageInput.length < 120) {
                alert("wiadomość za krótka, minimum 120 znaków");
            } 
            //max length message 2000 chars
            else if (messageInput.length > 2000) {
                alert("wiadomość za długa, max 2000 znaków");
            }                                         
            else{
                alert("dane prawidłowe, wiadomość wysłana pomyślnie");
                //sending to API
                sendMessage(newMessage);
            }            
        }
        validateNameInput(nameData, emailData, messageData);           
        // nullify state after submit   
        nullifyState(setNameData);
        nullifyState(setEmailData);
        nullifyState(setMessageData);                 
    }
    return (
        <div className="contact-container" id="contact">
            <div className="contact-left-side">
                <img className="contact-left-side__image" src={BackgroundContactForm} alt="form-background"/>                
            </div>
            <div className="contact-right-side">
                <p className="about-decorated-text--large">Skontaktuj się z nami</p>
                    <img src={Decoration} alt="decor" className="who-we-help-top__decoration" />
                <form className="contact-form" onSubmit={handleMessageSubmit(nameData, emailData, messageData, `nameField`, `emailField`, `messageField`, sendMessage,setNameData, setEmailData, setMessageData)}>
                    <div className="contact-form-fields">
                        <label className="contact-form-input--label">Wpisz swoje imię
                            <input id="nameField" className="contact-form-input--input" type="name" name="firstName" onChange={handleValueInput(setNameData)}></input>
                            </label>
                        <label className="contact-form-input--label">Wpisz swój email
                            <input id="emailField" className="contact-form-input--input" type="email" onChange={handleValueInput(setEmailData)}></input>
                        </label>                                             
                    </div>      
                    <div className="contact-form-fields">
                    <label className="contact-form-input--label">Wpisz swoją wiadomość
                            <textarea id="messageField" className="contact-form-input--input" onChange={handleValueInput(setMessageData)}></textarea>
                        </label> 
                    </div>                               
                    <button className="btn form-submit-button">Wyślij</button>
                </form>
            </div>
        </div>
    )
}
export default Contact;