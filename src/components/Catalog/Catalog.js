import { useCallback, useEffect, useState } from 'react';
import style from './Catalog.module.css';
import Category from './Category/Category';
import ProductFrame from './ProductFrame/ProductFrame';
import Products from './Products';
import SortBar from './SortBar/SortBar';

const Catalog = (props) => {
/*
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

  let productElements = prds.length ? prds.map( p => <ProductFrame image={p.image} name={p.name} oldcost={p.discount} cost={p.cost}/>) : <p>Продукция не найдена.</p>;
*/
    return(
      <div className={style.Catalog}>
        <SortBar productData={props.productData}/>
        <Category/>
        <div className={style.Products}>
          <Products/>
        </div>
      </div>
    );
}

export default Catalog;