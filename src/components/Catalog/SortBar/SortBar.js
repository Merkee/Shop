import style from './SortBar.module.css';

import React, {useState} from 'react';
import { getSearch } from '../../../redux/actions';
import { connect } from 'react-redux';

const SortBar = (props) => {
    /*dispatch(getAllProducts())*/
    //(e) => {setSearch(e.target.value); dispatch(getSearch(search))}
    const changeHandler = (e) => {
        const value = e.target.value;
        props.getSearch(value);
    }
    return(
        <div className={style.SortBar}>
            <input type="textarea" onChange={changeHandler} placeholder="Поиск продукции" className={style.SearchBar}/>
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

const mapDispatchToProps = {getSearch};

export default connect(null, mapDispatchToProps)(SortBar);