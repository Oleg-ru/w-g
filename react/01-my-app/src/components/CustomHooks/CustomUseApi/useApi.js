import {useCallback, useState} from "react";

export const useApi = (baseUrl) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const get = useCallback( async (endpoint) => {
        setLoading(true);
        try {
            const response = await fetch(`${baseUrl}/${endpoint}`);
            if (!response.ok) {
                throw new Error(`Ошибка HTTP-запроса! Статус: ${response.status}`)
            }
            const result = await response.json();
            setData(result);
        } catch (e) {
            setError(e)
        } finally {
            setLoading(false);
        }
    }, [baseUrl]);

    return {data, loading, error, get}
};