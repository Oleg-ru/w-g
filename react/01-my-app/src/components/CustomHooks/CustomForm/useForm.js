import {useDebugValue, useState} from "react";

export const useForm = (initialState) => {
    const [formData, setFormData] = useState(initialState);
    useDebugValue(formData, (data) => {
        return `данные из формы: ${data}`
    })

    function handleChange(key, value) {
        setFormData({
            ...formData,
            [key]: value,
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log('Данные: ', formData)
    }

    return {
        formData,
        handleChange,
        handleSubmit
    }
}

