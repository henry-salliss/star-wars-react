import { useState, useCallback } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        headers: requestConfig.headers ? requestConfig.headers : {},
      });
      if (!response.ok) throw new Error("Request failed");
      const data = await response.json();
      //   applyData(data);
      setData(data);
    } catch (err) {
      setError(err);
    }
    setIsLoading(false);
    console.log(isLoading);
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
    data,
  };
};

export default useHttp;
