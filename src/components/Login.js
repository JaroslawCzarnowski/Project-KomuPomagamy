import React, {useState, useEffect} from 'react';
import Decoration from '../assets/icons/Decoration.svg';
import {Link} from  'react-router-dom';
import HomeHeaderButton from './HomeHeaderButton';
import { fetchLogged } from '../Function/Function';

    const Login = () => {
        let [emailData, setEmailData] = useState([]);
        let [passwordData, setPasswordData] = useState([]);   
        let [loggedIn, setLoggedIn] = useState(false);  
    
    const nullifyState = (setStateToClear) => {
        setTimeout(() => {
            setStateToClear([]);
        },0);
    }
    const handleEmailInput = (setEmailData, emailLocalStorageValue) => (e) => {  
        let loginName = e.target.value   
        console.log(e.target.value);
        setEmailData(e.target.value)
        localStorage.setItem(emailLocalStorageValue, loginName);
    }
    //clear inner text from inputs mainly after sub attempts of forms, apply to input fields
    const nullifyInputValue = (targetName) => {
           targetName.value = "";
    }
        // set input value state
    const handleValueInput = (param) => (e) => {
            console.log(e.target.value);
            param(e.target.value)
        }
    const handleLoginValidation = (passwordData, emailData, 
        setLoggedIn, setPasswordData, setEmailData, emailErrorMessageId, passwordErrorMessageId, emailInputId, passwordInputId
        , errorColor1, validColor1) => (e) =>{
            e.preventDefault();
                    const emailErrorMessage = document.getElementById(emailErrorMessageId);
                    const passwordErrorMessage = document.getElementById(passwordErrorMessageId);
                    const emailInputField = document.getElementById(emailInputId);
                    const passwordInputField = document.getElementById(passwordInputId);
                    const errorColor = errorColor1;
                    const validColor = validColor1;   
            let isEmailValid = false;
            let isPasswordVaild = false;
            if (passwordData.length < 6) {           
                passwordErrorMessage.innerText = "Podane hasło jest nieprawidłowe";
                // passwordInputField.style.borderColor = "#DC143C";  
                isPasswordVaild = false;
            }
            else if (passwordData.length >= 6) {           
                passwordErrorMessage.innerText = "";               
                passwordInputField.style.borderColor = "black";   
                isPasswordVaild = true;                       
            }
            if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(emailData) === true) {
                //if email contains email chars         
               emailErrorMessage.innerText = "";
               emailInputField.style.borderColor = "black"; 
               isEmailValid = true;  
            }
            else if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(emailData) === false) {
                emailErrorMessage.innerText = "Podany email jest nieprawidłowy" 
                isEmailValid = false;                     
            }           
            if (isPasswordVaild === true && isEmailValid === true){
               console.log("przesłano pomyślnie");   
                setLoggedIn(true);
                localStorage.setItem("loggedIn", true);    
                localStorage.setItem("step", 1)
                fetchLogged(true);
                window.location.href="/loginSuccesful";

            } 
            else {
                console.log("login nieudany")
                setLoggedIn(false);
                localStorage.setItem("loggedIn", false);
                fetchLogged(false);
            }     
                nullifyState(setPasswordData);
                nullifyState(setEmailData);
                nullifyInputValue(emailInputField);
                nullifyInputValue(passwordInputField);    
        }
        return (
            <div className="login-container container-full">       
            <div className="login-menu-container" >         
              <HomeHeaderButton homeOrLogin={"notHome"} loggedIn={loggedIn}/> 
            </div>   
            <div className="login-text-container">
                <h1 className="login-text">Zaloguj się</h1>
                <img src={Decoration} alt="decor" className="who-we-help-top__decoration" />
            </div>           
            <form >
                    <div className="login-form-container">
                        <label>Email
                            <input id="loginEmail" type="email" onChange={handleEmailInput(setEmailData, `loginName`)}></input>
                            <p id="errorMessageEmail" className="login-email--error-message"></p>
                        </label>
                        <label>Hasło
                            <input id="loginPassword" type="password" onChange={handleValueInput(setPasswordData)}></input>
                            <p id="errorMessagePassword"className="login-password--error-message"></p>
                        </label>
                    </div>
                    <div className="login-form-buttons-container" >                        
                        <Link to="/signUp">
                             <button className="btn form-submit-button">Załóż konto</button>
                        </Link>   
                        <button className="btn form-submit-button" type="submit" onClick={
                    handleLoginValidation(passwordData, emailData,
                     setLoggedIn, setPasswordData, setEmailData,
                    `errorMessageEmail`, `errorMessagePassword`, `loginEmail`,`loginPassword`,
                     `black`, `#DC143C`)           
                    }>Zaloguj się</button>
                    </div>                               
            </form>
        </div>
    )
}
export default Login;