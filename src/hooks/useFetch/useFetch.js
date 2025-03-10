import { useCallback, useState } from "react";

export const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const fetchData = useCallback(async (url, options = {}) => {
    setLoading(true);
    try {
      const fetchOptions = {
        method: options.method || "GET",
        headers: options.headers || {
          ...(options.body instanceof FormData ? {} : { "Content-Type": "application/json" }),
        },
        body:
          options.body && !(options.body instanceof FormData)
            ? JSON.stringify(options.body)
            : options.body,
      };

      const res = await fetch(url, fetchOptions);
      let data;
      try {
        data = await res.json();
      } catch (_e) {
        data = { message: "Invalid response format" };
      }

      setResponse({ data, status: res.status, ok: res.ok });
    } catch (err) {
      setResponse({
        data: { message: err.message || "Connection error" },
        status: 0,
        ok: false,
      });
    } finally {
      setLoading(false);
    }
  }, []);

  return { fetchData, loading, response };
};
