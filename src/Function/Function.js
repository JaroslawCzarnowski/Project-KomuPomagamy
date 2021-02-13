// json-server --watch db.json --host 127.0.0.1
//nullify state after submit for submitHandlers in forms
import {postRegister, setLoggedFetch} from '../API/Fetch';
export const nullifyState = (setStateToClear) => {
    setTimeout(() => {
        setStateToClear([]);
    },0);      
}

export const nullifyStateString = (setStateToClear) => {
    setTimeout(() => {
        setStateToClear("");
    },0);      
}

//clear inner text from inputs mainly after sub attempts of forms, apply to input fields
export const nullifyInputValue = (targetName) => {    
       targetName.value = "";    
}

//change selected element's color. for borders
export const switchBorderColor = (targetName, newColor) => {    
    targetName.style.borderColor = newColor;    
}

//compare two strings
export const compareTwoStrings = (string1, string2) => {
    let result = string1.localeCompare(string2);
    if (result === 0) {
        return true
    }
    else {
        return false
    }
}

export const loginCheckForMenuView = (localStorageitem) => {  
    let value = localStorage.getItem(localStorageitem)       
    if (value === "true" || value === true ) {
        return true;
    }
    else {
        return false;
    }   
}

export const nextStep = (nextStepNumber) => {
    localStorage.setItem("step", nextStepNumber);
    window.location.reload();
}
export const logOut = (logged, locStorKey) => {
    logged = false;
    localStorage.setItem(locStorKey, false);      
}

// for inputs in simple steps form
export  const handleChoice = param => (e) => {     
    localStorage.setItem(param, e.target.value);       
    console.log(e.target.value);       
}   
//for radio boxes in simple steps form
export const handleRadioChoice = param => (e) => {
    // e.preventDefault();
    localStorage.setItem(param, e.target.id);
    console.log(e.target.id);
  }
  //for text input to override radio choices
  export const handleOverrideRadioWithText = param => (e) => {
          if (e.target.value != null) {
            localStorage.setItem(param, e.target.value);       
            console.log(e.target.value);
          }       
    }
    export const fetchLogged = (bool) => {
        let loggedInIs = {
            loggedIn: bool
        }
        setLoggedFetch(loggedInIs);
    }
    //signup new user, send data to API
    export const registerNewUser = (userEmail, userPassword) => {
        const userData = {          
            "userEmail": userEmail,
            "userPassword": userPassword,
            "orders": []
        }
        postRegister(userData);
    }
    export const logOut = (logged, locStorKey) => {
        logged = false;
        localStorage.setItem(locStorKey, false);  
        // fetchLogged(false);    
    }