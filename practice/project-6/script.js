import {products1} from './data1.js'
import {products2} from './data2.js'

const rootEl = document.getElementById('root');
const findInputEl = document.getElementById("find-input");
const findButtonEl = document.getElementById("find-button");
const resetButtonEl = document.getElementById("reset-button");

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

    const resulDOM = products.map(({name, brand, img, price, color, description, weight, size }) => {

        return `
    <div class="product">
        <div class="title">${name}</div>
       
        <div class="product-data">
            <p class="brend">Производитель: <span class="brend-desk">${brand}</span></p>
            <img class="image" src="${img}" alt="product">
            <p class="price">Цена: <span class="price-desk">${price} руб.</span></p>
            <p class="color">Цвет: <span class="color-desc">${color}</span></p>
            <p class="description">Описание: <span class="description-desc">${description}</span></p>
            ${size ? `<p class="size">Размер: <span class="size-desk">${size}</span></p>` : ''}
            <p class="weight">Вес: <span class="weight-desc">${weight}</span></p>
        </div>
    </div>
`
    })
    rootEl.innerHTML = resulDOM.join("")
}
const findProduct = (products, findName) => {
    return products.filter((product) => product.name.toUpperCase().includes(findName.toUpperCase()))
};
const onFindProductHandle = (products) => {
    const findName = findInputEl.value;
    if (findName) {
        render([]);
        loaderSwitch(true);
        setTimeout(() => {
            loaderSwitch(false);
            render(findProduct(products, findName));
        }, 1000)
    }
};
const loaderSwitch = (action) => {
    if (action) {
        const loaderEl = document.createElement("div");
        loaderEl.id = 'loader'
        loaderEl.classList.add('loader');
        rootEl.append(loaderEl);
    } else {
        const loaderEl = document.querySelector('#loader');
        loaderEl.remove();
    }
};

const products = sortData(parseData(products1, products2), "велосипеды", "аксессуары");
findButtonEl.addEventListener('click', () => {onFindProductHandle(products)});
findInputEl.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        onFindProductHandle(products)
    }
});
resetButtonEl.addEventListener('click', () => {
    render(products);
    findInputEl.value = '';
})
loaderSwitch(true)
setTimeout(() => {
    loaderSwitch(false);
    render(products);
}, 1000)