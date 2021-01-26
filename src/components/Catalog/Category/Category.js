import React, {Component} from 'react';

import style from './Category.module.css';

const Category = () => {

  let sortElement = React.createRef();

  let getSortType = () => {
    let checked = sortElement.current.checked;
    alert(checked);
  }

    return(
        <div className={style.Category}>
          <ul>
            <li><div className={style.SideTittle}><span>Каталог</span></div>
              <ul className={style.CategoryBox}>
                <li><input ref={sortElement} onChange={getSortType} type="checkbox"/>все</li>
                <li><input type="checkbox"/>мука</li>
                <li><input type="checkbox"/>мучные полуфабрикаты</li>
                <li><input type="checkbox"/>крупы</li>
                <li><input type="checkbox"/>здоровое питание</li>
                <li><input type="checkbox"/>комбикорма</li>
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

export default Category;