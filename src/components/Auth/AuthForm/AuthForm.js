import { Component, useEffect, useState } from 'react';
import style from './AuthForm.module.css';

const AuthForm = (props) => {

    //let show = props.signIn;
    const [showSignIn, setShowSignIn] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);

    useEffect(() => {
        setShowSignIn(props.signIn);
        setShowSignUp(props.signUp);
    });

    if(!showSignIn){
        return null;
    } else if(showSignUp){
        return (
            <div className={style.SignUp}>
                <div className={style.SignInner}>
                    <div className={style.Title}>Регистрация</div>
                    <div className={style.RegForm}>
                        <input className={style.TextBox} type="text" placeholder="Логин"/>
                        <input className={style.TextBox} type="password" placeholder="Пароль"/>
                        <input className={style.TextBox} type="text" placeholder="E-mail"/>
                        <input className={style.TextBox} type="text" placeholder="Имя"/>
                        <input className={style.TextBox} type="text" placeholder="Фамилия"/>
                        <input className={style.TextBox} type="text" placeholder="Адрес"/>
                        <input className={style.TextBox} type="text" placeholder="Номер телефона"/>
                        <button className={style.Buttons}>Зарегистрироваться</button>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className={style.SignIn}>
            <div className={style.SignInner}>
                <div className={style.Title}>Вход</div>
                <div className={style.LogForm}>
                    <input className={style.TextBox} type="text" placeholder="Логин"/>
                    <input className={style.TextBox} type="password" placeholder="Пароль"/>
                    <button className={style.Buttons}>Войти</button>
                </div>
                <div className={style.RegForm}>
                    <div className={style.NoAcc}>Нет аккаунта?</div>
                    <input onClick={() => props.setSignUp(!props.signUp)} className={style.Buttons} type="button" value="Регистрация"/>
                </div>
            </div>
        </div>
    );
}

export default AuthForm;