import style from './Guarantees.module.css';
import gr from './Guarantees.png'

const Guarantees = () => {
    return(
      <div className={style.Guarantees}>
        <div className={style.Title}>Не надлежащий вид?</div>
        <div className={style.Description}>
          Если вам привезли товар не надлежащего вида, вы всегда можете позвонить нам с просьбой обменять товар.
        </div>
        <img src={gr}/>
      </div>
    );
}

export default Guarantees;