import React, {useState, useEffect} from 'react';
import header from "../assets/image/Home-Hero-Image.jpg";
import Decoration from '../assets/icons/Decoration.svg';
import {Link} from 'react-router-dom';
import HomeHeaderButton from './HomeHeaderButton';
import { getLoggedBool } from '../API/Fetch';


const HomeHeader = (homeOrLogin, loggedIn) => {
    let [logged, setLogged] = useState("");
    useEffect(() => {
        getLoggedBool(setLogged);    
    }, [])
    console.log(logged);
    return (
        <div className= "heder_container" >
            <img src={header} className = "header_image" alt="header_image_img"/>
            <div className="header_menu">
            <div className= "header_menu_right">
            <div className= "login-menu-container">
            <HomeHeaderButton homeOrLogin={"home"} loggedIn={logged}/> 
            </div>
            <div className='header_menu_bottom'>
                <div className='header_menu_bottom_text'>
                    <h1>Zacznij pomagać! <br/>Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <img src={Decoration} alt='deco' className='header_bottom_decoration'/>
                </div>
                <div className='header_menu_bottom_btn'>
                    <Link className='btn_menu_bottom__bottom' to="/login">Oddaj rzeczy</Link>
                    <Link className='btn_menu_bottom__bottom' to="/login">Zorganizuj zbiókę</Link>
                </div>
                </div>
            </div>
          </div>
        </div>
    )
}

export default HomeHeader;












































































