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

    const post = useCallback( async (endpoint, body) => {
        setLoading(true);
        try {
            const response = await fetch(`${baseUrl}/${endpoint}`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });
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

    const put = useCallback( async (endpoint, body) => {
        setLoading(true);
        try {
            const response = await fetch(`${baseUrl}/${endpoint}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });
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

    const remove = useCallback( async (endpoint) => {
        setLoading(true);
        try {
            const response = await fetch(`${baseUrl}/${endpoint}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error(`Ошибка HTTP-запроса! Статус: ${response.status}`)
            }
        } catch (e) {
            setError(e)
        } finally {
            setLoading(false);
        }
    }, [baseUrl]);

    return {data, loading, error, get, post, put, remove}
};