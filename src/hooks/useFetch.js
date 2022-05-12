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
        
        if (!response.ok) {
          throw new Error('Request failed!');
        }
        
        const result = await response.json();
        setData(result);
      } catch(error) {
        setError(error);
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
