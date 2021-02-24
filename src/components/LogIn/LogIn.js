import style from './LogIn.module.css';

const LogIn = () => {
    return(
      <div className={style.LogIn}>
        <div className={style.AuthForm}>
          <div className={style.AuthForm}>
            <input className={style.InputBox} type="text" placeholder="Логин"/>
            <input className={style.InputBox} type="text"placeholder="Пароль"/>
            <input type="submit"/>
            <input type="checkbox"/>
          </div>
        </div>
        
      </div>
    );
}

export default LogIn;