import { useCallback, useEffect, useState } from 'react';
import style from './Catalog.module.css';
import Category from './Category/Category';
import ProductFrame from './ProductFrame/ProductFrame';
import SortBar from './SortBar/SortBar';

const Catalog = (props) => {

  const [product, setProduct] = useState([]);
  const loadAllProducts = useCallback(async () => {
      const response = await fetch("/selectProducts");
      const data = await response.json();
      setProduct(data);
  })

  useEffect(() => {
    loadAllProducts();
  }, [loadAllProducts])

  let prds = product;

  let productElements = prds.map( p => <ProductFrame image={p.image} name={p.name} oldcost={p.discount} cost={p.cost}/>);

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