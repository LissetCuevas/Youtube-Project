import { useState, useEffect } from 'react';

export const useHTTP = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  
  useEffect(() => {
    setIsLoading(true);
    fetch(url)
    .then(response => response.json())
    .then(responseData => {
      setData(responseData);
      setIsLoading(false);
    })
    .catch((error) => {
      setError(error);
    });
  }, [url]);
    
  return {data, isLoading, error};
}
