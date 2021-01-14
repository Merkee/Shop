import style from './Catalog.module.css';
import Category from './Category/Category';
import ProductFrame from './ProductFrame/ProductFrame';
import SortBar from './SortBar/SortBar';

import prod from './product.png';

const Catalog = () => {
    return(
      <div className={style.Catalog}>
        <SortBar/>
        <Category/>
        <div className={style.Products}>
          <ProductFrame image={prod} name="Мука для блинов с зародышем пшеницы и клетчаткой" oldcost="12.50" cost="9.99"/>
          <ProductFrame image={prod} name="Мука для блинов с зародышем пшеницы и клетчаткой" oldcost="12.50" cost="9.99"/>
          <ProductFrame image={prod} name="Мука для блинов с зародышем пшеницы и клетчаткой" oldcost="12.50" cost="9.99"/>
          <ProductFrame image={prod} name="Мука для блинов с зародышем пшеницы и клетчаткой" oldcost="12.50" cost="9.99"/>
          <ProductFrame image={prod} name="Мука для блинов с зародышем пшеницы и клетчаткой" oldcost="12.50" cost="9.99"/>
          <ProductFrame image={prod} name="Мука для блинов с зародышем пшеницы и клетчаткой" oldcost="12.50" cost="9.99"/>
          <ProductFrame image={prod} name="Мука для блинов с зародышем пшеницы и клетчаткой" oldcost="12.50" cost="9.99"/>
          <ProductFrame image={prod} name="Мука для блинов с зародышем пшеницы и клетчаткой" oldcost="12.50" cost="9.99"/>
          <ProductFrame image={prod} name="Мука для блинов с зародышем пшеницы и клетчаткой" oldcost="12.50" cost="9.99"/>
          <ProductFrame image={prod} name="Мука для блинов с зародышем пшеницы и клетчаткой" oldcost="12.50" cost="9.99"/>
          <ProductFrame image={prod} name="Мука для блинов с зародышем пшеницы и клетчаткой" oldcost="12.50" cost="9.99"/>
          <ProductFrame image={prod} name="Мука для блинов с зародышем пшеницы и клетчаткой" oldcost="12.50" cost="9.99"/>
          <ProductFrame image={prod} name="Мука для блинов с зародышем пшеницы и клетчаткой" oldcost="12.50" cost="9.99"/>
          <ProductFrame image={prod} name="Мука для блинов с зародышем пшеницы и клетчаткой" oldcost="12.50" cost="9.99"/>
          <ProductFrame image={prod} name="Мука для блинов с зародышем пшеницы и клетчаткой" oldcost="12.50" cost="9.99"/>
          <ProductFrame image={prod} name="Мука для блинов с зародышем пшеницы и клетчаткой" oldcost="12.50" cost="9.99"/>
        </div>
      </div>
    );
}

export default Catalog;