import style from './SortBar.module.css';

import { getSearch } from '../../../redux/actions';
import { connect } from 'react-redux';

const SortBar = (props) => {
    const changeSearchHandler = (e) => {
        props.searchParams(`\`name\` LIKE '%${e.target.value}%'`);
    }
    const changeFilterHandler = (e) => {
        props.filterParams(e.target.value);
    }
    //SELECT * FROM `products` WHERE cost = (SELECT MAX(cost) FROM products)
    return(
        <div className={style.SortBar}>
            <input type="textarea" onChange={(e) => changeSearchHandler(e)} placeholder="Поиск продукции" className={style.SearchBar}/>
            <div className={style.SelectBox}>
                <span>Сортировать по </span>
                <select className={style.SortSelect} onChange={(e) => changeFilterHandler(e)}>
                    <option value={"ORDER BY `id`"}>Фильтр: Цена</option>
                    <option value={"ORDER BY `cost` DESC"}>Цена: убывание</option>
                    <option value={"ORDER BY `cost`"}>Цена: возрастание</option>
                </select>
            </div>
        </div>
    );
}

const mapDispatchToProps = {getSearch};

export default connect(null, mapDispatchToProps)(SortBar);