import React, {useState, useEffect} from 'react';
import Decoration from '../assets/icons/Decoration.svg';
import HomeHeaderButton from '../components/HomeHeaderButton';
import {Link} from 'react-router-dom';
import { fetchLogged } from '../Function/Function';
import { getLoggedBool } from '../API/Fetch';


const LoginSuccesful = () => {
    let [logged, setLogged] = useState("");
    useEffect(() => {        
       getLoggedBool(setLogged);    
    }, [])
    console.log(logged, "logged w loginS");
    fetchLogged(true);
    return (
                <div className="login-container container-full">       
                    <div className="login-menu-container" >                   
                      <HomeHeaderButton homeOrLogin={"notHome"} loggedIn={logged}/>        
                    </div>   
                    <div className="login-text-container">
                        <h1 className="login-text">Zalogowanie nastąpiło pomyślnie</h1>
                        <img src={Decoration} alt="decor" className="who-we-help-top__decoration" />
                    </div>     
                    <div className="login-form-buttons-container" >                        
                        <Link to="/home">
                            <button className="btn form-submit-button" >Strona główna</button>
                        </Link>                     
                    </div>              
                </div>
            )
        }
        export default LoginSuccesful;
