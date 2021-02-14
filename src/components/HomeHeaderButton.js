import React, {useState, useEffect} from 'react';
import {Link} from 'react-scroll';
import {Link as Link2} from 'react-router-dom';
import { loginCheckForMenuView, logOut} from '../Function/Function.js';
import { getLoggedBool } from '../API/Fetch.js';


const HomeHeaderButton = ({homeOrLogin, loggedIn}) => {  
    let [logged, setLogged] = useState([]);
    useEffect(() => {
        getLoggedBool(setLogged);  
        // temp.push(logged);
    }, [])
    let userName = localStorage.getItem("loginName");
    // console.log(logged, "user to spr");
    localStorage.setItem("NextStep", 1);

    if (homeOrLogin === "home" && loggedIn === true || loggedIn === "true" ) {
        return (
            <>
            <div className="login-menu-container">
                 <div className="login-menu__top">
                 <p>Witaj, {userName}</p>
                        <Link2 to="/steps">
                            <button className="btn menu-top-button" href="">Oddaj rzeczy</button>
                        </Link2> 
                        <Link2 to="/logOut">
                            <button onClick={logOut} className="btn menu-top-button" href="">Wyloguj</button>
                        </Link2>                   
                    </div>  
                <div className="login-menu__bottom ">
                <button className="btn menu-bottom-button" href="">Start</button>
                        <Link to="simpleSteps" smooth={true} duration={1000}>
                            <button className="btn menu-bottom-button" href="">O co chodzi?</button>
                        </Link>    
                        <Link to="aboutUs" smooth={true} duration={1000}>
                            <button className="btn menu-bottom-button" href="">O nas</button>
                        </Link>              
                        <Link to="whoWeHelp" smooth={true} duration={1000}>
                            <button className="btn menu-bottom-button" href="">Fundacja i organizacje</button>
                        </Link> 
                        <Link to="contact" smooth={true} duration={1000}>
                            <button className="btn menu-bottom-button" href="">Kontakt</button>
                        </Link>         
                </div>
            </div>
            </>
        )
    }
    else if (homeOrLogin === "home" && loggedIn === false || loggedIn === "false" || loggedIn === "") {
        return (
            <>
             <div className="login-menu-container">
               <div className="login-menu__top">
                        <Link2 to="/login">
                            <button className="btn menu-top-button" href="">Zaloguj</button>
                        </Link2> 
                        <Link2 to="/signUp">
                            <button className="btn menu-top-button" href="">Załóż konto</button>
                        </Link2>                   
                    </div>  
                <div className="login-menu__bottom ">
                <button className="btn menu-bottom-button" href="">Start</button>
                        <Link to="simpleSteps" smooth={true} duration={1000}>
                            <button className="btn menu-bottom-button" href="">O co chodzi?</button>
                        </Link>    
                        <Link to="aboutUs" smooth={true} duration={1000}>
                            <button className="btn menu-bottom-button" href="">O nas</button>
                        </Link>              
                        <Link to="whoWeHelp" smooth={true} duration={1000}>
                            <button className="btn menu-bottom-button" href="">Fundacja i organizacje</button>
                        </Link> 
                        <Link to="contact" smooth={true} duration={1000}>
                            <button className="btn menu-bottom-button" href="">Kontakt</button>
                        </Link>         
                </div>
              </div>           
            </>
        )
    }
    else if (homeOrLogin !== "home" && loggedIn === true || loggedIn === "true" ) {
        return (
            <>
                <div className="login-menu-container">
                 <div className="login-menu__top">
                 <p>Witaj, {userName}</p>
                        <Link2 to="/steps">
                            <button className="btn menu-top-button" href="">Oddaj rzeczy</button>
                        </Link2> 
                        <Link2 to="/logOut">
                            <button onClick={logOut} className="btn menu-top-button" href="">Wyloguj</button>
                        </Link2>                   
                    </div>  
                
                </div>
            </>
        )
    }
    else if (homeOrLogin !== "home" && loggedIn === false || loggedIn === "false" || loggedIn === "") {
        return (
            <>
    <div className="login-menu-container">
                 <div className="login-menu__top">
                 <div className="header_menu_top">
                    <Link2 className="btn_menu_top" to ='/login'>Zaloguj</Link2>
                    <Link2 className="btn_menu_top" to ='/signUp'>Załóż konto</Link2>
                </div>
                <div className="header_menu_top_bottom">
                    <Link2 className='btn_menu-bottom' to =''> Start</Link2>
                    <Link2 className='btn_menu-bottom' to ='sipleSteps'> O co chodzi?</Link2>
                    <Link2 className='btn_menu-bottom' to ='about'> O nas</Link2>
                    <Link2 className='btn_menu-bottom' to = 'whoWeHelp'>Fundacja i organizacje</Link2>
                    <Link2 className='btn_menu-bottom' to ='contaccts'>Kontakt</Link2>
                </div>
                    </div>  
               
                </div>
            </>
        )
    } 
}

export default HomeHeaderButton;