import style from './SortBar.module.css';

const SortBar = () => {
    return(
        <div className={style.SortBar}>
            <input type="textarea" placeholder="Поиск продукции" className={style.SearchBar}/>
            <div className={style.SelectBox}>
                <span>Сортировать по </span>
                <select className={style.SortSelect}>
                    <option>Цена: убывание</option>
                    <option>Цена: возрастание</option>
                </select>
            </div>
        </div>
    );
}

export default SortBar;