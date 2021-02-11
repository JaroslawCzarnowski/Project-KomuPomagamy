import React, {useState} from 'react';
import bear from '../assets/image/Background-Form.jpg';
import Icon1 from '../assets/icons/Icon-1.svg';
import Icon4 from '../assets/icons/Icon-4.svg';
import { nextStep } from '../Function/Function';

const  SendSummary = () => {  
    let [orderData, setOrderData] = useState([]);
    const order = 
    {
        itemName: localStorage.getItem("itemName"),
        bags: localStorage.getItem("bags"),
        receiver: localStorage.getItem("receiver"),
        localization: localStorage.getItem("localization"),
        street: localStorage.getItem("street"),
        city: localStorage.getItem("city"),
        postCode: localStorage.getItem("postCode"),
        tel: localStorage.getItem("tel"),
        date: localStorage.getItem("date"),
        hour: localStorage.getItem("time"),
        extraNotes: localStorage.getItem("extraNotes")
    }
    console.log(order);

    const handleConfirm = () => {
        setOrderData(order);
        nextStep(6);
    }

    return (           
            <div className="step-bottom-container">
                <div className="step-bottom-left">   
                      <div>
                            <p>Oddajesz:</p>
                            <img src={Icon1} alt="ic1" className="simple-steps-middle--decoration" />
                            <p>{order.bags} worki, {order.itemName}, {order.receiver}</p>
                        <div>
                            <p>Do lokalizacji:</p>
                            <img src={Icon4} alt="ic4" className="simple-steps-middle--decoration" />
                            <p> {order.localization}</p>
                        </div>    
                      </div>
                      <div>
                        <div>Adres odbioru: 
                            <p>Ulica:{order.street}</p>
                            <p>Miasto:{order.city}</p> 
                            <p>Kod pocztowy:{order.postCode}</p>
                            <p>Numer telefonu:{order.tel}</p>
                        </div>    
                        <div>Data odbioru: 
                            <p>Data: {order.date}</p>
                            <p>Godzina: {order.hour}</p> 
                            <p>Uwagi do kuriera: {order.extraNotes}</p>                    
                        </div>                          
                      </div>      
                <div className="step-form__buttons">
                            <button onClick={() => nextStep(4)} className="btn steps-button">Wstecz</button>
                            <button onClick={() => nextStep(6)} className="btn steps-button">Zatwierdź</button>
                        </div> 
                </div>
                <div className="step-bottom-right">
                    <img src={bear} alt="bear"/>
                </div>
            </div>       
    )
}

export default SendSummary
