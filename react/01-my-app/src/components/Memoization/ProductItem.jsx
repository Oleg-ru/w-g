import React from 'react';

const ProductItem = React.memo(({product}) => {
    console.log('Я рендерился')
    return (
        <li>{product}</li>
    );
});

export default ProductItem;