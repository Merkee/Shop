import { useState } from 'react';
import style from './Catalog.module.css';
import Category from './Category/Category';
import Products from './Products';
import SortBar from './SortBar/SortBar';

const Catalog = (props) => {

  const [typeParams, setTypeParams] = useState("");
  const [searchParams, setSearchParams] = useState("`name` LIKE \'%%\'");
  const [filterParams, setFilterParams] = useState("ORDER BY `id`");
    return(
      <div className={style.Catalog}>
        <SortBar searchParams={setSearchParams} filterParams={setFilterParams}/>
        <Category typeParams={setTypeParams}/>
        <div className={style.Products}>
          <Products typeParams={typeParams} searchParams={searchParams} filterParams={filterParams}/>
        </div>
      </div>
    );
}

export default Catalog;