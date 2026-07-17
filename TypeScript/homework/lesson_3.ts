//Задачние 1
type Customer = {
    name: string;
    email: string;
    phone?: string;
}

type Payment =
    {method: 'card'; lastFourDigits: string} |
    {method: 'cash'; changeFrom: number} |
    {method: 'bank-transfer'; companyInn: string}


function formatPayment(payment: Payment): string {
    if (payment.method === 'card') {
        return `Card *${payment.lastFourDigits}`
    }
    else if (payment.method === 'cash') {
        return `Cash. Change from ${payment.changeFrom}`
    } else {
        return `Bank transfer to company INN ${payment.companyInn}`
    }
}
//Задание 2
type Product = {
    id: number;
    name: string;
    price: number;
    category: string;
};

type CartItem = {
    product: Product;
    quantity: number;
};

type Coupon = {
    code: string;
    discountPercent: number;
};

type Cart = {
    items: CartItem[];
    coupon?: Coupon;
};

//добавить товар в корзину. Если товар уже есть, увеличить количество.
function addItem(cart: Cart, product: Product, quantity: number): Cart {
    if(quantity < 1) {
        console.error('Кл-во товаров должно быть больше 1')
        return cart;
    }

    const existProduct = cart.items.find((item) => item.product.id === product.id);

    if (existProduct) {
        return {
            ...cart,
            items: cart.items.map(item => item.product.id === product.id ? {product, quantity: item.quantity + quantity} : item)
        }
    } else {
        return {
            ...cart,
            items: [...cart.items, {product, quantity}]
        }
    }
}

//удалить позицию из корзины по id товара.
function removeItem(cart: Cart, productId: number): Cart {
    if (!productId) {
        console.error('Нет id твара для удаления из корзины');
        return cart;
    }

    return {
        ...cart,
        items: cart.items.filter(item => item.product.id !== productId)
    }
}

//изменить количество товара. Если quantity <= 0, удалить позицию.
function updateQuantity(cart: Cart, productId: number, quantity: number): Cart {
    if (quantity <= 0) {
        return  removeItem(cart, productId);
    }

    return {
        ...cart,
        items: cart.items.map(item => item.product.id === productId ? {...item, quantity} : item)
    }
}

//применить купон к корзине.
function applyCoupon(cart: Cart, coupon: Coupon): Cart {
    return {
        ...cart,
        coupon
    }
}

//рассчитать итоговую сумму с учётом купона
function calculateTotal(cart: Cart): number {
    return cart.items.reduce(
        (previousValue, currentValue) =>
            previousValue + currentValue.product.price * (cart.coupon.discountPercent * 100), 0)
}

//Доп задание
type CartState =
    | { status: "empty" }
    | { status: "active"; items: CartItem[]; coupon?: Coupon }
    | {
    status: "checkout";
    items: CartItem[];
    coupon?: Coupon;
    deliveryAddress: string;
};

//переводит корзину из состояния active в checkout с проверкой, что корзина не пуста.
function checkout(cart: CartState): CartState {
    if (cart.status !== 'active') {
        return cart;
    } if (cart.items.length <= 0) {
        return cart;
    }

    return {
        status: 'checkout',
        items: cart.items,
        coupon: cart.coupon,
        deliveryAddress: 'ул. Ленина 100'
    }
}