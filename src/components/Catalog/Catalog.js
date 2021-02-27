import style from './Catalog.module.css';
import Category from './Category/Category';
import Products from './Products';
import SortBar from './SortBar/SortBar';

const Catalog = (props) => {
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