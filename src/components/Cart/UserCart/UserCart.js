import { connect } from 'react-redux';
import style from './UserCart.module.css';
import CartFrame from '../CartFrame/CartFrame';
import { getAllCost, loadOrders } from '../../../redux/actions';
import { useEffect } from 'react';
import axios from 'axios';

const UserCart = (props) => {

  useEffect(() => {
    props.loadOrders(props.appData.users[0].id);
    props.getAllCost(props.appData.users[0].id);
  }, []);

  const clickBuyHandler = () => {
    axios.post("/productsToBuy", {
      user: props.appData.users[0].id
    });
    props.loadOrders(props.appData.users[0].id);
    props.getAllCost(props.appData.users[0].id);
  }

    return(
      <div className={style.UserCart}>
        <div className={style.CartBar}>
          <div className={style.TotalCost}>Продукции в корзине на: {props.productsData.sum != 0 && props.productsData.sum[0].all_cost != null && props.productsData.sum[0].all_cost.toFixed(2) + " руб."} {props.productsData.sum != 0 && props.productsData.sum[0].all_cost == null && "0 руб."}</div>
          <button className={style.BuyButton} onClick={() => clickBuyHandler()}>Оформить заказ</button>
        </div>
        <div className={style.ProductCart}>
          <div className={style.TableValues}>
            <div className={style.Row}></div>
            <div className={style.Row}>Наименование продукции</div>
            <div className={style.Row}>Кол-во</div>
            <div className={style.Row}>Стоимость</div>
            <div className={style.Row}></div>
          </div>
          {props.productsData.orders.length == 0 && <div className={style.CartEmpty}>В корзине нет заказов</div>}
          {props.productsData.orders.map( p => <CartFrame id={p.id} image={p.image} name={p.name} time={new Date(p.time).toLocaleString('ru', 'dd.MM.yyyy').replace(/[\s,%]\s\d{2}:\d{2}:\d{2,4}$/, '')} count={p.count} cost={p.cost.toFixed(2)}/>)}
        </div>
      </div>
    );
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = {loadOrders, getAllCost}; 

export default connect(mapStateToProps, mapDispatchToProps)(UserCart);