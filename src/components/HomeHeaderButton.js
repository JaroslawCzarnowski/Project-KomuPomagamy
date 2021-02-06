import React, {useState, useEffect} from 'react';
import {Link} from 'react-scroll';
import {Link as Link2} from 'react-router-dom';
import { loginCheckForMenuView } from '../Function/Function.js';


const HomeHeaderButton = ({homeOrLogin, loggedIn}) => {  
    let logged = loginCheckForMenuView("loggedIn");
    let userName = localStorage.getItem("loginName");
    localStorage.setItem("NextStep", 1);
    const logout = () => {
        logged = false;
        localStorage.setItem("loggedIn", false);      
    }  
    if (homeOrLogin === "home" && logged === true) {
        return (
            <>
            <div className="login-menu-container">
                 <div className="login-menu__top">
                 <p>Witaj, {userName}</p>
                        <Link2 to="/steps">
                            <button className="btn menu-top-button" href="">Oddaj rzeczy</button>
                        </Link2> 
                        <Link2 to="/wylogowano">
                            <button onClick={logout} className="btn menu-top-button" href="">Wyloguj</button>
                        </Link2>                   
                    </div>  
                </div>
            </>
        )
    }
    else if (homeOrLogin !== "home" && logged === true) {
        return (
            <>
                <div className="login-menu-container">
                 <div className="login-menu__top">
                 <p>Witaj, {userName}</p>
                        <Link2 to="/steps">
                            <button className="btn menu-top-button" href="">Oddaj rzeczy</button>
                        </Link2> 
                        <Link2 to="/wylogowano">
                            <button onClick={logout} className="btn menu-top-button" href="">Wyloguj</button>
                        </Link2>                   
                    </div>  
                
                </div>
            </>
        )
    }
    else if (homeOrLogin !== "home" && logged === false) {
        return (
            <>
    <div className="login-menu-container">
                 <div className="login-menu__top">
                 <div className="header_menu_top">
                    <Link2 className="btn_menu_top" to ='Login'>Zaloguj</Link2>
                    <Link2 className="btn_menu_top" to ='Login'>Załóż konto</Link2>
                </div>
                <div className="header_menu_top_bottom">
                    <Link2 className='btn_menu-bottom' to =''> Start</Link2>
                    <Link2 className='btn_menu-bottom' to ='SipleSteps'> O co chodzi?</Link2>
                    <Link2 className='btn_menu-bottom' to ='About'> O nas</Link2>
                    <Link2 className='btn_menu-bottom' to = 'WhoWeHelp'>Fundacja i organizacje</Link2>
                    <Link2 className='btn_menu-bottom' to ='Contaccts'>Kontakt</Link2>
                </div>
                    </div>  
               
                </div>
            </>
        )
    } 
}

export default HomeHeaderButton;