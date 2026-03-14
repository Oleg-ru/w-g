import React, {useMemo, useState} from 'react';
import ProductItem from "./ProductItem.jsx";

function ProductList({products}) {
    const [filteredList, setFilteredList] = useState("");
    const [renderCount, setRenderCount] = useState(0);

    const filteredProducts = useMemo(() => {
        console.time('filter')
        return products
            .filter(
                product => {
                    const result = product.name.toLowerCase().includes(filteredList.toLowerCase())
                    console.timeEnd('filter')
                    return result;
                }
            )}
    , [products, filteredList])
    return (
        <div>
            <input type="text"
                   value={filteredList}
                   placeholder="Посик..."
                   onChange={(event) => setFilteredList(event.target.value)
            }/>
            <button onClick={() => {setRenderCount(renderCount + 1)}}>Рендерить - {renderCount}</button>
            <ul>
                {filteredProducts.map(product => <ProductItem key={product.id} product={product.name}/>)}
            </ul>
        </div>
    );
}

export default ProductList;