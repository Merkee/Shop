import { Component, useEffect, useState } from 'react';
import style from './SignIn.module.css';

const AuthDialog = (props) => {
    
    const [signUp, setSignUp] = useState(false);

    if(!props.auth){
        return null;
    } else if(signUp) {
        return (
            <div className={style.SignUpDialog}>
                <div className={style.AuthForm}>
                    <div className={style.Title}>Регистрация</div>
                    <div className={style.RegForm}>
                        <input className={style.Control} type="text" placeholder="Логин"/>
                        <input className={style.Control} type="text" placeholder="Пароль"/>
                        <input className={style.Control} type="text" placeholder="E-mail"/>
                        <input className={style.Control} type="text" placeholder="Имя"/>
                        <input className={style.Control} type="text" placeholder="Фамилия"/>
                        <input className={style.Control} type="text" placeholder="Адрес"/>
                        <input className={style.Control} type="text" placeholder="Номер телефона"/>
                        <input className={style.Control} type="button" value="Зарегистрироваться"/>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={style.LogInDialog}>
            <div className={style.AuthForm}>
                <div className={style.Title}>Вход</div>
                <div className={style.LogForm}>
                    <input className={style.Control} type="text" placeholder="Логин"/>
                    <input className={style.Control} type="text" placeholder="Пароль"/>
                    <input className={style.Control} type="button" value="Войти"/>
                </div>
                <div className={style.RegForm}>
                    <div className={style.NoAcc}>Нет аккаунта?</div>
                    <input onClick={() => setSignUp(!signUp)} className={style.Control} type="button" value="Регистрация"/>
                </div>
            </div>
        </div>
    );
}

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {showAuth: false};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick(){
        this.setState(state => ({
            showAuth: !state.showAuth
        }));
    }

    render() {
        if(!this.props.signIn){
            return null;
        }
        return (
            <div className={style.SignIn}>
                <div className={style.AuthForm}>
                    <div className={style.Title}>Вход</div>
                    <div className={style.LogForm}>
                        <input className={style.Control} type="text" placeholder="Логин"/>
                        <input className={style.Control} type="text" placeholder="Пароль"/>
                        <input className={style.Control} type="button" value="Войти"/>
                    </div>
                    <div className={style.RegForm}>
                        <div className={style.NoAcc}>Нет аккаунта?</div>
                        <input className={style.Control} type="button" value="Регистрация"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignIn;