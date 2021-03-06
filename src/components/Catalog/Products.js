import { useEffect, useState } from "react";
import { connect } from "react-redux"
import { initProducts } from "../../redux/actions";
import ProductFrame from "./ProductFrame/ProductFrame";
import ProductsLoader from "./ProductsLoader";

const Products = (props) => {
    useEffect(() => {
        let sql = props.searchParams;
        if(props.typeParams != "") sql+= ` AND ${props.typeParams}`;
        sql+= ` ${props.filterParams}`;
        props.initProducts(sql);
    }, [props.typeParams, props.searchParams, props.filterParams]);

    return <ProductsLoader/>
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = {initProducts}; 

export default connect(mapStateToProps, mapDispatchToProps)(Products);