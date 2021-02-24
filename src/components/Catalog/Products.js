import { useCallback, useEffect } from "react";
import {connect, useDispatch, useSelector } from "react-redux"
import { getAllProducts, initProducts } from "../../redux/actions";
import ProductFrame from "./ProductFrame/ProductFrame"

const Products = ({initProducts, productsData}) => {
    useEffect(() => {initProducts()}, [initProducts]);
    const products = productsData.products;
    if(!products.length){
        return <p>Продукция не найдена.</p>
    }
    return products.map( p => <ProductFrame image={"data:image/png;base64," + btoa(new Uint8Array(p.image.data).reduce((data, byte) => data + String.fromCharCode(byte), ''))} name={p.name} oldcost={p.discount == 0 ? "" : (p.cost-(p.discount/100)).toFixed(2) } cost={p.cost}/>)
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = {initProducts}; 

export default connect(mapStateToProps, mapDispatchToProps)(Products);