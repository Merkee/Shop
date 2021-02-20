import React, {Component, useState} from 'react';
import { connect } from 'react-redux';
import { getTypes } from '../../../redux/actions';

import style from './Category.module.css';

const Category = (props) => {

  let select = ""; 
  let changeHandler = (e) => {
    if(select == ""){
      select = `WHERE \`type\` = '${e.target.value}'`;
    } else select+= ` OR type = '${e.target.value}'`;
    const value = select;
    props.getTypes(value);
  }

    return(
        <div className={style.Category}>
          <ul>
            <li><div className={style.SideTittle}><span>Каталог</span></div>
              <ul className={style.CategoryBox}>
                <li><input type="checkbox" value="Мука" onChange={changeHandler}/>мука</li>
                <li><input type="checkbox" value="Мучные полуфабрикаты" onChange={changeHandler}/>мучные полуфабрикаты</li>
                <li><input type="checkbox" value="Крупы" onChange={changeHandler}/>крупы</li>
                <li><input type="checkbox" value="Здоровое питание" onChange={changeHandler}/>здоровое питание</li>
                <li><input type="checkbox" value="Комбикорма" onChange={changeHandler}/>комбикорма</li>
              </ul>
            </li>
            <li><div className={style.SideTittle}><span>Стоимость</span></div>
              <ul className={style.CategoryBox}>
                <li><span>От</span><input className={style.CostBox} type="text"/> <span>До</span><input className={style.CostBox} type="text"/></li>
                <li><input type="checkbox"/><span>акция</span></li>
              </ul>
            </li>
          </ul>
        </div>
    );
}

const mapDispatchToProps = {getTypes};

export default connect(null, mapDispatchToProps)(Category);