import React from 'react';

import bear from '../assets/image/Background-Form.jpg';
import { nextStep } from '../Function/Function';

const  SendStep2 = () => {  
    const handleChoice = param => (e) => {     
        localStorage.setItem(param, e.target.value);       
        console.log(e.target.value);       
    }   
    return (           
            <div className="step-bottom-container">
                <div className="step-bottom-left">
                    <p>Krok 2/4</p>
                    <form className="step2-form">
                        <p>Podaj liczbę 60l worków, w które spakowałeś rzeczy</p>                    
                          <label>Liczba 60l worków
                          <select  onChange={handleChoice("bags")}>
                                           <option>1</option>
                                           <option>2</option>
                                           <option>3</option>
                                           <option>4</option>
                                           <option>5</option>
                                       </select>
                              </label>   
                           <div className="step-form__buttons">
                            <button onClick={() => nextStep(1)} className="btn steps-button">Wstecz</button>
                            <button onClick={() => nextStep(3)} className="btn steps-button">Dalej</button>
                        </div>
                    </form>                    
                </div>
                <div className="step-bottom-right">
                    <img src={bear} alt="bear"/>
                </div>
            </div>       
    )
}

export default SendStep2