import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import style from './Cart.module.css';

const Cart = (props) => {
    if(props.appData.users.length != 0) return <li><NavLink to="/Cart" activeClassName={style.active}>Корзина</NavLink></li>
    return null;
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, null)(Cart);