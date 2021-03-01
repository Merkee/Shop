import { useEffect } from "react";
import { connect } from "react-redux"
import { initProducts } from "../../redux/actions";
import ProductFrame from "./ProductFrame/ProductFrame"

const Products = ({initProducts, productsData}) => {
    useEffect(() => {initProducts()}, [initProducts]);
    const products = productsData.products;
    if(!products.length){
        return <p>Продукция не найдена.</p>
    }
    return products.map( p => <ProductFrame id={p.id} image={p.image} name={p.name} oldcost={(p.cost-(p.discount/100)).toFixed(2)} cost={p.cost}/>)
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = {initProducts}; 

export default connect(mapStateToProps, mapDispatchToProps)(Products);