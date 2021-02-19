import React from 'react';
import Contacts from '../components/Contacts';
import Footer from '../components/Footer';
import bear from '../assets/image/Background-Form.jpg';
import { handleChoice, handleOverrideRadioWithText, handleRadioChoice, nextStep } from '../Function/Function';

const  SendStep3 = () => {     

    return (
        <>
               
            <div className="step-bottom-container">
                <div className="step-bottom-left">
                    <p>Krok 3/4</p>
                    <form>
                        <p>Lokalizacja:</p>                       
                            <select onChange={handleChoice(`localization`)}>
                                <option>Poznań</option>
                                <option>Warszawa</option>
                                <option>Kraków</option>
                                <option>Wrocław</option>
                                <option>Katowice</option>
                            </select>
                             <span className="step3-paragraph">Komu chcesz pomóc?</span>                       
                            <div className="steps-choice-buttons">
                                <button type="radio" name="radio" id="dzieciom" onClick={handleRadioChoice("receiver")}>dzieciom</button>    
                                <button  type="radio" name="radio" id="samotnym matkom" onClick={handleRadioChoice("receiver")}>samotnym matkom</button> 
                                <button  type="radio" name="radio" id="bezdomnym" onClick={handleRadioChoice("receiver")}>bezdomnym</button> 
                                <button  type="radio" name="radio" id="niepełnosprawnym" onClick={handleRadioChoice("receiver")}>niepełnosprawnym</button> 
                                <button  type="radio" name="radio" id="osobom starszym" onClick={handleRadioChoice("receiver")}>osobom starszym</button> 
                            </div>   
                        <span className="step3-paragraph"> Wpisz nazwę konkretnej organizacji(opcjonalnie)
                            <input type="text" onChange={handleOverrideRadioWithText(`receiver`)}></input>
                        </span>
                <div className="step-form__buttons">
                            <button onClick={() => nextStep(2)} className="btn steps-button">Wstecz</button>
                            <button onClick={() => nextStep(4)} className="btn steps-button">Dalej</button>
                        </div>
                    </form>                    
                </div>
                <div className="step-bottom-right">
                    <img src={bear} alt="bear"/>
                </div>
            </div>
            <Contacts/>
            <Footer/>            
            </>
    )
}

export default SendStep3