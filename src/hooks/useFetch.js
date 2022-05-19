import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  
  useEffect(() => {
    let controller = new AbortController();
    
    const fetchData = async () => {
      setIsLoading(true);
      
      try {
        const response = await fetch(url);
        const result = await response.json();
        if (!response.ok) {
          throw new Error(result.error.message);
        }
        setData(result);
      } catch(errorMessage) {
        setError(errorMessage);
      }
      setIsLoading(false);
    };

    fetchData();
    
    return () => {
      controller.abort();
    }
  }, [url]);
    
  return { data, isLoading, error };
}
