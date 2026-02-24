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

    const addInfoElement= (DOMElement, newText, className) => {
        DOMElement.classList.add(className);
        DOMElement.innerText = newText;
    };

    return products.map(product => {
        const productEl = document.createElement("div"); //Карточка
        const titleEl = document.createElement("p"); //Заголовок
        const brandEl = document.createElement("p"); //Бренд
        const brandSpanEl = document.createElement("span"); //Бренд значение
        const imgEl = document.createElement("p"); //Картинка товара
        const priceEl = document.createElement("p"); //Цена
        const priceSpanEl = document.createElement("span"); //Сама цена
        const oldPriceEl = document.createElement("p"); //Старая цена значение
        const oldPriceSpanEl = document.createElement("span"); //Старая цена значение
        const colorEl = document.createElement("p"); //Цвет
        const colorSpanEl = document.createElement("span"); //Цвет значение
        const descriptionEl = document.createElement("p"); //Описание
        const descriptionSpanEl = document.createElement("span"); //Описание значение
        const weightEl = document.createElement("p"); //Вес
        const weightSpanEl = document.createElement("span"); //Вес значение


        productEl.classList.add("product");

        return
    })
}
render()
const products = sortData(parseData(products1, products2), "велосипеды", "аксессуары")
console.log(getSale(products))

