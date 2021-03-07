import { useState } from 'react';
import { connect } from 'react-redux';
import style from './Auth.module.css';
import AuthForm from './AuthForm/AuthForm';
import { NavLink } from 'react-router-dom';


const Auth = (props) => {

    return(
        <li>
            {props.appData.users.length != 0 &&
                <NavLink to="/Profile" activeClassName={style.active}>Профиль</NavLink>
            }
            {props.appData.users.length == 0 &&
                <a className={style.AuthButton} onClick={() => {props.setShowSignIn(!props.showSignIn); props.setShowSignUp(false);}}>Войти</a>
            }
            <AuthForm signIn={props.showSignIn} setSignIn={props.setShowSignIn} signUp={props.showSignUp} setSignUp={props.setShowSignUp}/>
        </li>
    );
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, null)(Auth);