import { useState, useEffect } from "react";

function useQuery(url) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    setIsLoaded(false);
    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        setData(data);
        setIsLoaded(true);
      });
  }, [url]);

  return { data, isLoaded };
}

export default useQuery;
