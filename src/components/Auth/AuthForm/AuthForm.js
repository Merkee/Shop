import axios from 'axios';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { userSignIn } from '../../../redux/actions';
import style from './AuthForm.module.css';

const AuthForm = (props) => {

    //let show = props.signIn;
    const [showSignIn, setShowSignIn] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);
    const [logMsg, setLogMsg] = useState("");

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [sourname, setSourname] = useState("");
    const [address, setAddres] = useState("");
    const [phone, setPhone] = useState("");
    const [logged, setLogged] = useState();

    useEffect(() => {
        setShowSignIn(props.signIn);
        setShowSignUp(props.signUp);
        if(props.appData.users.length != 0){
            props.setSignIn(false);
        }
    });

    const regClickHandler = () => {
        axios.post("/userSignUp", {
            username: username,
            password: password, 
            email: email, 
            name: name, 
            sourname: sourname, 
            address: address, 
            phone: phone
        });
        
        setLogMsg("Аккаунт успешно зарегистрирован, авторизируйтесь.");

        props.setSignUp(false);
    }

    const logClickHandler = () => {
        props.userSignIn(username, password);  

    }

    if(!showSignIn){
        return null;
    } else if(showSignUp){
        return (
            <div onClick={() => props.setSignIn(!props.signIn)} className={style.formEffect}>
                <div className={style.SignUp} onClick={(e) => e.stopPropagation()}>
                    <div className={style.Title}>Регистрация</div>
                    <div className={style.RegForm}>
                        <input className={style.TextBox} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Логин"/>
                        <input className={style.TextBox} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Пароль"/>
                        <input className={style.TextBox} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="E-mail"/>
                        <input className={style.TextBox} onChange={(e) => setName(e.target.value)} type="text" placeholder="Имя"/>
                        <input className={style.TextBox} onChange={(e) => setSourname(e.target.value)} type="text" placeholder="Фамилия"/>
                        <input className={style.TextBox} onChange={(e) => setAddres(e.target.value)} type="text" placeholder="Адрес"/>
                        <input className={style.TextBox} onChange={(e) => setPhone(e.target.value)} type="text" placeholder="Номер телефона" pattern="[0-9]{7}"/>
                        <button className={style.Buttons} onClick={() => regClickHandler()}>Зарегистрироваться</button>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div onClick={() => props.setSignIn(!props.signIn)} className={style.formEffect}>
            <div className={style.SignIn} onClick={(e) => e.stopPropagation()}>
                <div className={style.Title}>Вход</div>
                <div className={style.LogForm}>
                {/*logMsg != "" &&
                    <div>
                        {logMsg}
                    </div>
                */}
                    <input className={style.TextBox} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Логин"/>
                    <input className={style.TextBox} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Пароль"/>
                    <button onClick={() => logClickHandler()} className={style.Buttons}>Войти</button>
                </div>
                <div className={style.RegForm}>
                    <div className={style.NoAcc}>Нет аккаунта?</div>
                    <input onClick={() => props.setSignUp(!props.signUp)} className={style.Buttons} type="button" value="Регистрация"/>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = {userSignIn}; 

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);