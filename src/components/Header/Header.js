import style from './Header.module.css';

import { NavLink } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Auth from '../Auth/Auth';

const Header = (props) => {
  let auth = false;
    return (
      <header className={style.Header}>
        <nav className={style.Nav}>
          <div className={style.NavInner}>
            <div className={style.MenuItems}>
              <ul className={style.Menu}>
                <li><NavLink to="/Main" activeClassName={style.active}>Главная</NavLink></li>
                <li><NavLink to="/Catalog" activeClassName={style.active}>Каталог</NavLink></li>
                <li><NavLink to="/Contacts" activeClassName={style.active}>Контакты</NavLink></li>
                <li><NavLink to="/AboutUs" activeClassName={style.active}>О нас</NavLink></li>
              </ul>
            </div>
            <div className={style.MenuLogg}>
              <ul className={style.Logg}>
                <Cart/>
                <Auth showSignIn={props.showSignIn} setShowSignIn={props.setShowSignIn} showSignUp={props.showSignUp} setShowSignUp={props.setShowSignUp}/>
                {/*<li><a activeClassName={style.active} onClick={() => {auth = !auth; console.log(auth)}}>Вход</a></li>*/}
                {/*<li><Auth/></li>*/}
              </ul>
            </div>
          </div>
        </nav>
        {auth == true &&
        <div>HI</div>
        }
      </header>
    )
}

export default Header;