import {useEffect, useState} from "react";

export function useLocalStorage(key, initialValue) {

    const getStoredValue = () => {

        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue
        } catch (error) {
            console.error('Ошибка чтения данных из local storage по ключу ', key, ' Ошибка: ', error);
            return initialValue;
        }
    };

    const [storedValue, setStoredValue] = useState(getStoredValue); //getStoredValue БЕЗ СКОБОК вызова функции. Это ленивая загрузка 1 раз вызывается переданная функция при создании компонента

    function setValue(value) {
        try {
            setStoredValue(value);
            localStorage.setItem(key, JSON.stringify(value))
        } catch (error) {
            console.error('Ошибка загрузки данных из local storage по ключу ', key, ' Ошибка: ', error);
        }
    }

    function removeValue() {
        try {
            setStoredValue(initialValue)
            localStorage.removeItem(key);
        } catch (error) {
            console.error('Ошибка очистки данных из local storage по ключу ', key, ' Ошибка: ', error);
        }
    }

    useEffect(() => {
        setStoredValue(getStoredValue());
    }, [key]);

    return [storedValue, setValue, removeValue]
}