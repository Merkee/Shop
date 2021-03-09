import style from './Discount.module.css';
import ds from './Discount.png'

const Discount = () => {
    return(
      <div className={style.Discount}>
        <div className={style.Title}>Сэкономим?</div>
        <div className={style.Description}>
            Ежедневно интернет магазин проводит акции и
            снижает цены на самую разнообразную продукцию.
        </div>
        <img src={ds}/>
      </div>
    );
}

export default Discount;