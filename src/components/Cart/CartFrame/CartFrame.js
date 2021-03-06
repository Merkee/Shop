import axios from 'axios';
import style from './CartFrame.module.css';

const CartFrame = (props) => {

    const clickHandler = () => {
        axios.post("/removeOffer", {
            id: props.id
        });
    }

    return(
      <div className={style.CartFrame}>
          <div className={style.OrderID}>{props.id}</div>
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

export default CartFrame;