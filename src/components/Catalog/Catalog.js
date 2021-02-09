import { useEffect, useState } from 'react';
import style from './Catalog.module.css';
import Category from './Category/Category';
import ProductFrame from './ProductFrame/ProductFrame';
import SortBar from './SortBar/SortBar';

const Catalog = (props) => {

  let gs = async () => {
    let response = await fetch("/selectproducts");
    let data = await response.json();
    let productElements = data.map( p => <ProductFrame image={p.image} name={p.name} oldcost={p.discount} cost={p.cost}/>);
    return productElements;
  }

  const [state, setState] = useState();
  setState(gs());

  console.log(state);

  let productElements = props.productData.map( p => <ProductFrame image={p.img} name={p.name} oldcost={p.oldcost} cost={p.cost}/>);

    return(
      <div className={style.Catalog}>
        <SortBar productData={props.productData}/>
        <Category/>
        <div className={style.Products}>
          {productElements}
        </div>
      </div>
    );
}

export default Catalog;