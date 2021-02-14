import {useDispatch, useSelector } from "react-redux"
import { getAllProducts } from "../../redux/actions";
import ProductFrame from "./ProductFrame/ProductFrame"

const Products = () => {
    const dispatch = useDispatch();
    dispatch(getAllProducts());
    const products = useSelector(state => state.productsData.products);
    console.log(products);
    if(!products.length){
        return <p>Продукция не найдена.</p>
    }
    return products.map( p => <ProductFrame image={p.image} name={p.name} oldcost={p.discount} cost={p.cost}/>)
}

export default Products;