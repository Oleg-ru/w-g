import {products1} from './data1.js'
import {products2} from './data2.js'



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

const products = parseData(products1, products2)
const newData = sortData(parseData(products1, products2),"велосипеды", "аксессуары")

console.log(newData)
