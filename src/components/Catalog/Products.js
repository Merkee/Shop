import { useCallback, useEffect } from "react";
import {connect, useDispatch, useSelector } from "react-redux"
import { getAllProducts } from "../../redux/actions";
import ProductFrame from "./ProductFrame/ProductFrame"

const Products = ({getAllProducts, productsData}) => {
    useEffect(() => {getAllProducts()}, [getAllProducts]);
    const products = productsData.products;
    if(!products.length){
        return <p>Продукция не найдена.</p>
    }
    return products.map( p => <ProductFrame image={p.image} name={p.name} oldcost={p.discount == 0 ? "" : (p.cost-(p.discount/100)).toFixed(2) } cost={p.cost}/>)
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = {getAllProducts}; 

export default connect(mapStateToProps, mapDispatchToProps)(Products);