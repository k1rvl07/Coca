import { useCallback, useState } from "react";

export const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const fetchData = useCallback(async (url, options = {}) => {
    setLoading(true);
    try {
      const response = await fetch(url, {
        method: options.method || "GET",
        headers: options.headers || { "Content-Type": "application/json" },
        body: options.body ? JSON.stringify(options.body) : null,
      });

      const data = await response.json();

      setResponse({
        data,
        status: response.status,
        ok: response.ok,
      });
    } catch (err) {
      setResponse({
        data: null,
        message: err.message || "Something went wrong",
        status: 0,
        ok: false,
      });
    } finally {
      setLoading(false);
    }
  }, []);

  return { fetchData, loading, response };
};
