import { NavLink } from 'react-router-dom';
import CategoryDropdown from './CategoryDropdown/CategoryDropdown';
import style from './Nav.module.css';

const Nav = () => {
    return(
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
              <li className={style.Cart} activeClassName={style.active}><NavLink to="/Cart">Корзина</NavLink></li>
              <li><NavLink to="/LogIn" activeClassName={style.active}>Вход</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Nav;