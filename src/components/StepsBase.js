import React, {useState} from 'react';
import HomeHeaderButton from '../components/HomeHeaderButton';
import Rhomb from './Rhomb';
import SendStep1 from '../components/SendStep1';
import SendStep2 from '../components/SendStep2';
import SendStep3 from '../components/SendStep3';
import SendStep4 from '../components/SendStep4';
import SendSuccesful from '../components/SendSuccesful';
import SendSummary from '../components/SendSummary';


import Decoration from '../assets/icons/Decoration.svg';
import Sweater from '../assets/image/Form-Hero-Image.jpg';


const  StepsBase = () => {
    // const [step, setStep] = useState(1);
    // localStorage.setItem("step", 1)
    let currentStep = localStorage.getItem("step");
    console.log(currentStep);
    const StepHandler = ({step}) => {
       
        if (step === "1" || step === 1) {
            return (
                <SendStep1 />
            )
        }
        else if (step === "2" || step === 2) {
            return (
                <SendStep2 />
            )
        }
        else if (step === "3" || step === 3) {
            return (
                <SendStep3 />
            )
        }
        else if (step === "4" || step === 4) {
            return (
                <SendStep4 />
            )
        }
        else if (step === "5" || step === 5) {
            return (
                <SendSummary />
            )
        }
        else if (step === "6" || step === 6) {
            return (
                <SendSuccesful />
            )
        }
    }

    return (
        <div className="steps-container">
            <div className="steps-top">
                <div className="steps-top-left">
                <img src={Sweater} className="steps-left-side--img" alt="steps-top-left-img" />
                </div>
                <div className="steps-top-right">
                <div className="login-menu-container" >                        
              
              <HomeHeaderButton homeOrLogin={"notHome"} loggedIn={true}/>        

            </div>   
                    <div className="steps-top-right__content">
                        <p>Oddaj rzeczy, których już nie chcesz<br/>POTRZEBUJĄCYM</p>                        
                        <img src={Decoration} alt="decor" className="steps-right-side--content__decoration" />
                        <span>Wystarczą 4 proste kroki:</span>
                        <div className="steps-right-side--content__rhombs">
                            <Rhomb number={1} textRhomb={"Wybierz rzeczy"} />
                            <Rhomb number={2} textRhomb={"Spakuj je w worki"}/>
                            <Rhomb number={3} textRhomb={"Wybierz fundację"} />
                            <Rhomb number={4} textRhomb={"Zamów kuriera"} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="steps-middle ">
                <h1>Ważne!</h1>
                <h3>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieli komu najlepiej je przekazać.</h3>
            </div>
            <div className="steps-bottom">          
                <StepHandler step={currentStep} />
            </div>
        </div>
    )
}

export default StepsBase