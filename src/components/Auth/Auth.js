import { Component, useEffect, useState } from 'react';
import style from './Auth.module.css';
import SignIn from './SignIn/SignIn';

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {showSignIn: false};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick(){
        this.setState(state => ({
            showAuth: !state.showSignIn
        }));
    }

    render() {
        return (
            <li>
                <SignIn signIn={this.state.showAuth}/>
                <a onClick={this.handleToggleClick}>Войти</a>
            </li>
        );
    }
}

export default Auth;