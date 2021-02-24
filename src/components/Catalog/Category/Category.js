import React, {Component, useState} from 'react';
import { connect } from 'react-redux';
import { getTypes } from '../../../redux/actions';

import style from './Category.module.css';

const Category = (props) => {

  let checkBoxArgs = [];

  let changeHandler = (e) => {
    let sql = ""; 
    if(e.target.checked){
      checkBoxArgs.push(e.target.value);
    } else {checkBoxArgs.splice(checkBoxArgs.indexOf(e.target.value), 1)};
    for(let i = 0; i < checkBoxArgs.length; i++){
      console.log(checkBoxArgs[i]); 
      if(i == 0) sql+= `WHERE \`type\` = '${checkBoxArgs[i]}'`
      else sql+= ` OR \`type\` = '${checkBoxArgs[i]}'`
    }
    const value = sql;
    console.log(sql);
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