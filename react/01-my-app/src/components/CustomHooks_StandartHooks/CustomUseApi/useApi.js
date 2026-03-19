import {useCallback, useState} from "react";
import axios from "axios";

export const useApi = (baseUrl) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const api = axios.create({
        baseURL: baseUrl,
        headers: {
            "Content-Type": "application/json"
        }
    });

    const request = useCallback(async (method, endpoint, body = null) => {
        try {
            const response = await api[method](endpoint, body);
            setData(response.data);
        } catch (e) {
            setError(e)
        }
    }, [api]);

    const get = useCallback(async (endpoint) => request('get', endpoint), [request]);

    const post = useCallback(async (endpoint, body) => request('post', endpoint, body), [request]);

    const put = useCallback(async (endpoint, body) => request('put', endpoint, body), [request]);

    const remove = useCallback(async (endpoint) => request('delete', endpoint), [api]);

    return {data, loading, error, get, post, put, remove}
};