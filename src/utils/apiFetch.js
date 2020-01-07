import  { useState, useEffect, useCallback } from "react";

export default url => {
  const api = "https://rickandmortyapi.com/api";
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  const doFetch = useCallback(() => {
    setLoading(true);
  }, []);

  useEffect(() => {
    if (!loading) {
      return;
    }
    fetch(api + url)
      .then(res => res.json())
      .then(data => {
        setResponse(data);
        setLoading(false)
      })
      .catch(error => {
        setError(error);
        setLoading(false)

      });
      
  }, [loading, url]);

  return [{ loading, error, response }, doFetch];
};
