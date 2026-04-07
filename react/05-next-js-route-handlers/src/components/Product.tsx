async function Product() {
    await new Promise(resolve => setTimeout(resolve, 5000))
    return (
        <div>Продукт</div>
    );
}

export default Product;