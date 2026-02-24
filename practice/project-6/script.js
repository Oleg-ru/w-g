import {products1} from './data1.js'
import {products2} from './data2.js'

const rootEl = document.getElementById('root');

const parseData = (data1, data2) => {
    return [...JSON.parse(data1), ...JSON.parse(data2)];
};
const sortData = (data, firsType, secondType) => {
    return data.sort((p1, p2) => {
        if (p1.type === firsType) {
            return -1
        }
        if (p2.type === secondType) {
            return 1
        }
        return 0
    });
};
const getSale = (products) => {
    const sale90days = Date.now() - 90 * 24 * 60 * 60 * 1000;
    const sale180days = Date.now() - 180 * 24 * 60 * 60 * 1000;
    console.log(products[0].arrival_date)
    console.log()

    console.log(Date.parse(products[0].arrival_date) > sale180days)
    return [...products].map(product => {
        const arrivalTimestamp = Date.parse(product.arrival_date);
        let newPrice;

        if (arrivalTimestamp < sale180days) {
            newPrice = product.price * 0.8;
        }
        else if (arrivalTimestamp < sale90days) {
            newPrice = product.price * 0.9;
        }
        else {
            newPrice = product.price;
        }

        return {...product, price: newPrice}
    })
};

const render = (products) => {
    const containerEl = document.createElement("div");
    rootEl.append(containerEl);

    const resulDOM = products.map(({name, brand, img, price, color, description, weight}) => {

        return `
    <div class="product">
        <div class="title">${name}</div>
        <div class="product-data">
            <p class="brend">Производитель: <span class="brend-desk">${brand}</span></p>
            <img src="${img}" alt="product">
            <p class="price">Цена: <span class="price-desk">${price}</span></p>
            <p class="oldPrice">Старая цена: <span class="oldPrice-desc">${0}</span></p>
            <p class="color">Цвет: <span class="color-desc">${color}</span></p>
            <p class="description">Описание: <span class="description-desc">${description}</span></p>
            <p class="weight">Вес: <span class="weight-desc">${weight}</span></p>
        </div>
    </div>
`
    })
    rootEl.innerHTML = resulDOM.join("")
}

const products = sortData(parseData(products1, products2), "велосипеды", "аксессуары")
render(products)
console.log(getSale(products))

