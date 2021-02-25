import { Component, useEffect, useState } from 'react';
import style from './Auth.module.css';
import AuthForm from './AuthForm/AuthForm';


const Auth = () => {
    const [showSignIn, setShowSignIn] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);

    return(
        <li>
            <AuthForm signIn={showSignIn} signUp={showSignUp} setSignUp={setShowSignUp}/>
            <a className={style.AuthButton} onClick={() => {setShowSignIn(!showSignIn); setShowSignUp(false);}}>Войти</a>
        </li>
    );
}

export default Auth;