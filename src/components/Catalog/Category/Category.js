import { useEffect, useState } from 'react';
import style from './Category.module.css';

const Category = (props) => {
  const [checkBoxArgs] = useState([]);

  let changeHandler = (e) => {
    console.log(checkBoxArgs);
    let sql = ""; 
    if(e.target.checked){
      checkBoxArgs.push(e.target.value);
    } else {checkBoxArgs.splice(checkBoxArgs.indexOf(e.target.value), 1)};
    for(let i = 0; i < checkBoxArgs.length; i++){
      if(i == 0) sql+= `\`type\` = '${checkBoxArgs[i]}'`
      else sql+= ` OR \`type\` = '${checkBoxArgs[i]}'`
    }
    props.typeParams(sql);
    console.log(sql);
    console.log(checkBoxArgs);
  }

    return(
        <div className={style.Category}>
          <ul>
            <li><div className={style.SideTittle}><span>Типы товаров</span></div>
              <ul className={style.CategoryBox}>
                <li><input type="checkbox" value="Мука" onChange={changeHandler}/>мука</li>
                <li><input type="checkbox" value="Мучные полуфабрикаты" onChange={changeHandler}/>мучные полуфабрикаты</li>
                <li><input type="checkbox" value="Крупы" onChange={changeHandler}/>крупы</li>
                <li><input type="checkbox" value="Здоровое питание" onChange={changeHandler}/>здоровое питание</li>
                <li><input type="checkbox" value="Комбикорма" onChange={changeHandler}/>комбикорма</li>
              </ul>
            </li>
          </ul>
        </div>
    );
}

export default Category;