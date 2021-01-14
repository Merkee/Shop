import style from './ProductFrame.module.css';

const ProductFrame = (props) => {
    return(
      <div className={style.ProductFrame}>
        <img src={props.image}></img>
        <p className={style.Name}>{props.name}</p>
        <p className={style.Cost}><strike><span>{props.oldcost}</span></strike> {props.cost} р.</p>
      </div>
    );
}

export default ProductFrame;