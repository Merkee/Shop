import style from './TitleBlock.module.css';

const TitleBlock = () => {
    return (
      <div className={style.TitleBlock}>
        <div className={style.TittleBG}>
          <h1 className={style.Tittle}>Золотой колосок</h1>
          <h2 className={style.SubTittle}>Интернет-магазин</h2>
        </div>
      </div>
    )
}

export default TitleBlock;