import style from './Info.module.css';
import pf from './Info.png'

const Info = () => {
    return(
      <div className={style.Info}>
        <img src={pf}/>
        <div className={style.TextBlock}>
          <div className={style.Title}>Принести в вашу жизнь больше вкуса</div>
          <div className={style.Description}>С продукцией из нашего магазина можно приготовить множество блюд.</div>
        </div>
      </div>
    );
}

export default Info;