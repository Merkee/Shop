import axios from 'axios';
import { connect } from 'react-redux';
import { getAllCost, loadOrders } from '../../../redux/actions';
import style from './CartFrame.module.css';

const CartFrame = (props) => {

    const clickHandler = () => {
        axios.post("/removeOffer", {
            id: props.id
        });
        props.loadOrders(props.appData.users[0].id);
        props.getAllCost(props.appData.users[0].id);
    }

    return(
      <div className={style.CartFrame}>
          <div className={style.OrderImage}>
              <img src={"data:image/png;base64," + btoa(new Uint8Array(props.image.data).reduce((data, byte) => data + String.fromCharCode(byte), ''))}/>
          </div>
          <div className={style.NameAndTime}>
            <div className={style.Title}>
                <div className={style.OrderName}>{props.name}</div>
                <div className={style.OrderTime}>Дата заказа: {props.time}</div>
            </div>
          </div>
          <div className={style.OrderCount}>{props.count} шт.</div>
          <div className={style.OrderCost}>{props.cost} руб.</div>
          <button className={style.DelButton} onClick={() => clickHandler()}>×</button>
      </div>
    );
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = {loadOrders, getAllCost}; 

export default connect(mapStateToProps, mapDispatchToProps)(CartFrame);