import axios from 'axios';
import { useState } from 'react';
import { connect } from 'react-redux';
import style from './ProfileInfo.module.css';

const ProfileInfo = (props) => {

  const [password, setPassword] = useState(props.appData.users[0].password);
  const [email, setEmail] = useState(props.appData.users[0].email);
  const [name, setName] = useState(props.appData.users[0].name);
  const [sourname, setSourname] = useState(props.appData.users[0].sourname);
  const [address, setAddres] = useState(props.appData.users[0].address);
  const [phone, setPhone] = useState(props.appData.users[0].phone);

  const [updMsg, setUpdMsg] = useState("");

  const updateClickHandler = () => {
    axios.post("/userUpdateInfo", {
        id: props.appData.users[0].id,
        password: password, 
        email: email, 
        name: name, 
        sourname: sourname, 
        address: address, 
        phone: phone
    });
    setUpdMsg("Данные успешно обновлены");
}

    return(
      <div className={style.ProfileInfo}>
          <h1>Мой профиль</h1>
          <div className={style.AccSettings}>
            <h2>Аккаунт</h2>
            <div className={style.InputGroup}>
              <div className={style.Label}>Логин</div>
              <div className={style.Label}>{props.appData.users[0].username}</div>
            </div>
            <div className={style.InputGroup}>
              <div className={style.Label}>Пароль</div>
              <input className={style.TextBox} type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
          </div>

          <div className={style.PrivateSettings}>
            <h2>Личная информация</h2>
            <div className={style.InputGroup}>
              <div className={style.Label}>Имя</div>
              <input className={style.TextBox} type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className={style.InputGroup}>
              <div className={style.Label}>Фамилия</div>
              <input className={style.TextBox} type="text" value={sourname} onChange={(e) => setSourname(e.target.value)}/>
            </div>
            <div className={style.InputGroup}>
              <div className={style.Label}>E-mail</div>
              <input className={style.TextBox} type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className={style.InputGroup}>
              <div className={style.Label}>Телефон</div>
              <input className={style.TextBox} type="text" value={phone} onChange={(e) => setPhone(e.target.value)}/>
            </div>
            <div className={style.InputGroup}>
              <div className={style.Label}>Адрес</div>
              <input className={style.TextBox} type="text" value={address} onChange={(e) => setAddres(e.target.value)}/>
            </div>
          </div>
          <button className={style.UpdateButton} onClick={() => updateClickHandler()}>Обновить данные</button>
          {updMsg != "" &&
            <div className={style.MessageBox}>
              {updMsg}
            </div>
          }
      </div>
    );
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, null)(ProfileInfo);