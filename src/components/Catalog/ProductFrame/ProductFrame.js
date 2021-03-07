import axios from 'axios';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import style from './ProductFrame.module.css';

const ProductFrame = (props) => {

  useEffect(() => setAllCost(props.cost), [props.cost]);

  const [allCost, setAllCost] = useState(props.cost);
  const [allOldCost, setAllOldCost] = useState(props.oldcost);
  const [count, setCount] = useState(1);

  const costChangeHandler = (e) => {
    if(e.target.value != ""){
      setAllCost((props.cost * e.target.value).toFixed(2));
      setAllOldCost((props.oldcost * e.target.value).toFixed(2))
      setCount(e.target.value);
    } else {
      setAllCost(props.cost);
      setAllOldCost(props.oldcost);
      setCount(1);
    }
  }

  const clickBuyHandler = () => {
    if(props.appData.users.length != 0){
      axios.post("/productsToCart", {
        userid: props.appData.users[0].id,
        productid: props.id,
        count: count
    });
    } else {
      props.setShowSignIn(!props.showSignIn); 
      props.setShowSignUp(false);
    }
  }

    return(
      <div className={style.ProductFrame}>
        <img src={"data:image/png;base64," + btoa(new Uint8Array(props.image.data).reduce((data, byte) => data + String.fromCharCode(byte), ''))}></img>
        <p className={style.Name}>{props.name}</p>
        <p className={style.Cost}>
          {props.oldcost != props.cost &&
            <strike><span>{allOldCost}</span></strike>
          }
          <span> {allCost} р.</span>
        </p>
        <div className={style.ControlGroup}>
          <input type="text" placeholder="1 шт." className={style.CountBox} onChange={(e) => costChangeHandler(e)}/>
          <button className={style.BuyButton} value={props.id} onClick={() => clickBuyHandler()}>купить</button>
        </div>
      </div>
    );
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, null)(ProductFrame);