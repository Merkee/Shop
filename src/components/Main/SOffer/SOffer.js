//import ProductFrame from '.../ProductFrame/ProductFrame';

import style from './SOffer.module.css';

const SOffer = () => {
    return(
      <div className={style.SOffer}>
        <h2>Специальное предложение</h2>
          <div className={style.ProductBar}>
            <div className={style.ProductBarInner}>
             {/*<ProductFrame image={prod} name="Мука для блинов с зародышем пшеницы и клетчаткой" oldcost="12.50" cost="9.99"/>
              <ProductFrame image={prod} name="Мука" cost="9.99"/>
              <ProductFrame image={prod} name="Мука" cost="9.99"/>
              <ProductFrame image={prod} name="Мука" cost="9.99"/>*/}
            </div>
          </div>
      </div>
    );
}

export default SOffer;