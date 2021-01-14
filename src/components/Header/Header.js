import style from './Header.module.css';

const Header = () => {
    return (
      <header className={style.Header}>
        <div className={style.TittleBG}>
          <h1 className={style.Tittle}>Золотой колосок</h1>
          <h2 className={style.SubTittle}>Барановический комбинат хлебопродуктов</h2>
        </div>
      </header>
    )
}

export default Header;