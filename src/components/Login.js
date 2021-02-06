import React, {useState} from 'react';
import Decoration from '../assets/icons/Decoration.svg';
import {Link} from  'react-router-dom';
import HomeHeaderButton from './HomeHeaderButton';

    const Login = () => {
        return (
            <div className="login-container">
                <div className="login-menu-container">
                    <HomeHeaderButton homeOrLogin={"notHome"} loggedIn={false} />
                </div>
                <div className="login-text-container">
                    <h1 className="login-text">Zaloguj się</h1>
                    <img src={Decoration} alt="decor" className="who-we-help-top_decoration" />
                </div>
                <form onSubmit>
                    <div className="login-form-container">
                        <label>Email
                            <input id="loginEmail" type="email" ></input>
                            <p className="login-email-error-message"></p>
                        </label>
                        <label>Hasło
                            <input id="loginPassword" type="password" ></input>
                            <p className="login-password-error-message"></p>
                        </label>
                    </div>
                    <div className="login-form-buttons-container">
                        <Link to="/signUp">
                            <button className="btn form-submit-button">Załóż konto</button>
                        </Link>
                        <button className="btn form-submit-button">Zaloguj się</button>
                    </div>
                </form>
            </div>
        );
    };

export default Login;