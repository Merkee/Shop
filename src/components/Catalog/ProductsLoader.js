import { useEffect, useState } from "react";
import { connect } from "react-redux";
import ProductFrame from "./ProductFrame/ProductFrame";

const ProductsLoader = (props) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(props.productsData.products)
    }, [props.productsData.products]);

    if(!products.length){
        return <p onClick={() => console.log(props.searchParams)}>Продукция не найдена.</p>
    }
    return products.map( p => <ProductFrame id={p.id} image={p.image} name={p.name} oldcost={p.cost} cost={(p.cost-p.cost*(p.discount/100)).toFixed(2)} showSignIn={props.showSignIn} setShowSignIn={props.setShowSignIn} showSignUp={props.showSignUp} setShowSignUp={props.setShowSignUp}/>);
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, null)(ProductsLoader);