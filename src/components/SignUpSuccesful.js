import React, {useState, useEffect} from 'react';
import Decoration from '../assets/icons/Decoration.svg';
import HomeHeaderButton from './HomeHeaderButton';
import {Link} from 'react-router-dom';
import { fetchLogged } from '../Function/Function';
import { getLoggedBool } from '../API/Fetch';

const SignUpSaccesful = () => {
    let [logged, setLogged] = useState("");
    useEffect(() => {        
       getLoggedBool(setLogged);    
    }, [])
    console.log(logged, "logged w logout");
    fetchLogged(true);
    return (
        <div className="login-container">       
            <div className="login-menu-container" >                   
              
              <HomeHeaderButton homeOrLogin={"notHome"} loggedIn={false}/>        
    
            </div>   
            <div className="login-text-container">
                <h1 className="login-text">Zarejestrowano pomyślnie</h1>
                <img src={Decoration} alt="decor" className="who-we-help-top__decoration" />
            </div>     
            <div className="login-form-buttons-container" >                        
                <Link to="/home">
                    <button className="btn form-submit-button">Strona główna</button>
                </Link>                     
            </div>              
        </div>
    )
}

export default SignUpSaccesful ;