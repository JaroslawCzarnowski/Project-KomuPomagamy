import React, {useState, useEffect} from 'react';
import Decoration from '../assets/icons/Decoration.svg';
import {Link} from  'react-router-dom';
import HomeHeaderButton from './HomeHeaderButton';


const SignUp = () => {
    let [emailData, setEmailData] = useState("");
    let [passwordData, setPasswordData] = useState("");  
    let [passwordRepeatData, setPasswordRepeatData] = useState(""); 
    let [loggedIn, setLoggedIn] = useState(false);   
    
    useEffect(() => {
        localStorage.setItem("loggedIn", loggedIn);
    }, [])
const compareTwoStrings = (string1, string2) => {
        let result = string1.localeCompare(string2);
        if (result === 0) {
            return true
        }
        else {
            return false
        }
    }
const nullifyStateString = (setStateToClear) => {
        setTimeout(() => {
            setStateToClear("");
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

const handleSignUpSubmit = (passwordData, passwordRepeatData, emailData, setLoggedIn,
            setPasswordData, setPasswordRepeatData, setEmailData, emailErrMessageId, passwordErrMessageId, passwordRepeatErrMessageId,
            emailInputId, passwordInputId, passwordRepeatInputId
            , errorColor2, validColor2) => (e) => {
            e.preventDefault();
const emailErrorMessage = document.getElementById(emailErrMessageId);
const passwordErrorMessage = document.getElementById(passwordErrMessageId);
const confirmPasswordErrorMessage = document.getElementById(passwordRepeatErrMessageId);
const emailInputField = document.getElementById(emailInputId);        
const passwordInputField = document.getElementById(passwordInputId);
const passwordRepeatInputField = document.getElementById(passwordRepeatInputId);
const errorColor = errorColor2;
const validColor = validColor2;
        let isEmailValid = false;
        let isPasswordVaild = false;
        let isPasswordConfirmed = false;
        let isEmptyInput = true;
        if (emailData === null || passwordData === null || passwordRepeatData === null) {
               isEmptyInput = true;         
           }
        else if (emailData !== null && passwordData !== null && passwordRepeatData !== null)  {
               isEmptyInput = false;
           }
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
        if (passwordData === null || passwordRepeatData === null) {
                isPasswordConfirmed = false;
                confirmPasswordErrorMessage.innerHTML = "hasło lub potwierdzenie hasła nieprawidłowe";
            }
        if (compareTwoStrings(passwordData, passwordRepeatData) === true) {
        if (passwordData === null || passwordRepeatData === null) {
                    isPasswordConfirmed = false;
                    confirmPasswordErrorMessage.innerHTML = "hasło lub potwierdzenie hasła nieprawidłowe";
                }
        else {                
                    confirmPasswordErrorMessage.innerHTML = "";
                    isPasswordConfirmed = true;
                }           
             }    
        else if (compareTwoStrings(passwordData, passwordRepeatData) === false) {         
                confirmPasswordErrorMessage.innerHTML = "Hasło nieprawidłowe";
                isPasswordConfirmed = false;
             }      
        if (isPasswordVaild === true && isEmailValid === true && isPasswordConfirmed === true && isEmptyInput === false){
                console.log("przesłano pomyślnie"); 
                setLoggedIn(true);
                localStorage.setItem("loggedIn", true);    
                localStorage.setItem("step", 1)
                //fetch post here       
            }      
                nullifyStateString(setPasswordData);
                nullifyStateString(setEmailData);
                nullifyStateString(setPasswordRepeatData);
                nullifyInputValue(emailInputField);
                nullifyInputValue(passwordInputField);
                nullifyInputValue(passwordRepeatInputField);      
        }
    return (
        <div className="login-container container-full">       
        <div className="login-menu-container" >            
          <HomeHeaderButton homeOrLogin={"notHome"} loggedIn={loggedIn}/>
        </div>   
        <div className="login-text-container">
            <h1 className="login-text">Załóż konto</h1>
            <img src={Decoration} alt="decor" className="who-we-help-top__decoration" />
        </div>           
        <form onSubmit={handleSignUpSubmit(passwordData, passwordRepeatData, emailData,
         setLoggedIn, setPasswordData, setPasswordRepeatData,setEmailData,
         `errorEmail`, `errorPassword`, `errorRepeatPassword`, `loginEmail2`,`loginPassword2`, `loginPasswordRepeat`, 
         `black`, `#DC143C`
        )}>
                <div className="login-form-container">
                    <label className="login-form-top">Email
                        <input id="loginEmail2" type="email" onChange={handleEmailInput(setEmailData, `loginName`)}></input>
                        <p id="errorEmail" className="login-email--error-message"></p>
                    </label>
                    <label>Hasło
                        <input id="loginPassword2" type="password" onChange={handleValueInput(setPasswordData)}></input>
                        <p id="errorPassword" className="login-password--error-message"></p>
                    </label>
                    <label>Powtórz hasło
                        <input id="loginPasswordRepeat" type="password" onChange={handleValueInput(setPasswordRepeatData)}></input>
                        <p id="errorRepeatPassword" className="login-confirm-password--error-message"></p>
                    </label>
                </div>
                <div className="login-form-buttons-container" >    
                    <button className="btn form-submit-button">Załóż konto</button>                    
                    <Link to="/login">
                        <button className="btn form-submit-button">Zaloguj się</button>
                    </Link>                          
                </div>                               
        </form>
    </div>
    )
}
      
export default SignUp;
