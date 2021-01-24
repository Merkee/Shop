import style from './Catalog.module.css';
import Category from './Category/Category';
import ProductFrame from './ProductFrame/ProductFrame';
import SortBar from './SortBar/SortBar';

const Catalog = (props) => {

  let productElements = props.productData.map( p => <ProductFrame image={p.img} name={p.name} oldcost={p.oldcost} cost={p.cost}/>)

    return(
      <div className={style.Catalog}>
        <SortBar/>
        <Category/>
        <div className={style.Products}>
          {productElements}
        </div>
      </div>
    );
}

export default Catalog;