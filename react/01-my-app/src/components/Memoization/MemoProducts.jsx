import React from 'react';
import ProductList from "./ProductList.jsx";

function MemoProducts(props) {
    const products = [];

    for (let i = 0; i < 1000; i++) {
        products.push({
            id: i + 1,
            name: `Продукт с ID ${i + 1}`
        });

    }

    return (
        <ProductList products={products}/>
    );
}

export default MemoProducts;