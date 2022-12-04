import { useEffect, useState } from "react";

export const useFetch = (url: string) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    const request = await fetch(url);
    const data = await request.json();
    setData(data);
    setIsLoading(false);
  };

  return {
    data,
    isLoading,
    fetchData,
  };
};
