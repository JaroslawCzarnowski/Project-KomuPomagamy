
//nullify state after submit for submitHandlers in forms
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
    if (localStorage.getItem(localStorageitem) === "true") {
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