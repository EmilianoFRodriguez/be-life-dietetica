import { useState, useEffect } from 'react';

export default function useFetch(url) {
    const [dataApi, setDataApi] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
            fetch(url)
                .then((response) => response.json())
                .then((data) => setDataApi(data))
                .catch((error) => setError(error))
                .finally(() => setLoading(false));
            }, "3000");
    }, []);

    return { dataApi, loading, error };
};