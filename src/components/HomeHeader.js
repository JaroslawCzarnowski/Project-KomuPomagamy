import React from 'react';
import header from "../assets/image/Home-Hero-Image.jpg";
import Decoration from '../assets/icons/Decoration.svg';
import {Link} from 'react-router-dom';
import HomeHeaderButton from './HomeHeaderButton';


const HomeHeader = () => {
    let loggedIn = localStorage.getItem("loggedIn");    
    let isLoggedIn = false;
    if (loggedIn === "true") {
        isLoggedIn = true;
    }
    else {
        isLoggedIn = false;
    }
    return (
        <div className= "heder_container" >
            <img src={header} className = "header_image" alt="header_image_img"/>
            <div className="header_menu">
            <div className= "header_menu_right">
                <div className="header_menu_top">
                    <Link className="btn_menu_top" to ='Login'>Zaloguj</Link>
                    <Link className="btn_menu_top" to ='Login'>Załóż konto</Link>
                </div>
                <div className="header_menu_top_bottom">
                    <Link className='btn_menu-bottom' to =''> Start</Link>
                    <Link className='btn_menu-bottom' to ='SipleSteps'> O co chodzi?</Link>
                    <Link className='btn_menu-bottom' to ='About'> O nas</Link>
                    <Link className='btn_menu-bottom' to = 'WhoWeHelp'>Fundacja i organizacje</Link>
                    <Link className='btn_menu-bottom' to ='Contaccts'>Kontakt</Link>
                </div>
            <div className='header_menu_bottom'>
                <div className='header_menu_bottom_text'>
                    <h1>Zacznij pomagać<br/>Odaj niechciane rzeczy w zaufane ręce</h1>
                    <img scr={Decoration} className='header_bottom_decoration' alt='Decoration'/>
                </div>
                <div className='header_menu_bottom_btn'>
                    <Link className='btn_menu_bottom__bottom' to="">Oddaj rzeczy</Link>
                    <Link className='btn_menu_bottom__bottom' to="">Zorganizuj zbiókę</Link>
                </div>
                </div>
            </div>
          </div>
        </div>
    )
}

export default HomeHeader;












































































