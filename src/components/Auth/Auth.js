import { useState } from 'react';
import { connect } from 'react-redux';
import style from './Auth.module.css';
import AuthForm from './AuthForm/AuthForm';
import { NavLink } from 'react-router-dom';


const Auth = (props) => {
    const [showSignIn, setShowSignIn] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);

    return(
        <li>
            {props.appData.users.length != 0 &&
                <NavLink to="/Profile" activeClassName={style.active}>Профиль</NavLink>
            }
            {props.appData.users.length == 0 &&
                <a className={style.AuthButton} onClick={() => {setShowSignIn(!showSignIn); setShowSignUp(false);}}>Войти</a>
            }
            <AuthForm signIn={showSignIn} setSignIn={setShowSignIn} signUp={showSignUp} setSignUp={setShowSignUp}/>
        </li>
    );
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, null)(Auth);