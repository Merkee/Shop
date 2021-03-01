import { useState } from 'react';
import style from './ProductFrame.module.css';

const ProductFrame = (props) => {

  const [allCost, setAllCost] = useState(props.cost);
  const [allOldCost, setAllOldCost] = useState(props.oldcost);

  const costChangeHandler = (e) => {
    if(e.target.value != ""){
      setAllCost((props.cost * e.target.value).toFixed(2));
      setAllOldCost((props.oldcost * e.target.value).toFixed(2))
    } else {
      setAllCost(props.cost);
      setAllOldCost(props.oldcost);
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
          <input type="text" className={style.CountBox} onChange={(e) => costChangeHandler(e)}/>
          <button className={style.BuyButton} value={props.id}>купить</button>
        </div>
      </div>
    );
}

export default ProductFrame;