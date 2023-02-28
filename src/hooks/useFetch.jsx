import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const abortCont = new AbortController();
      await axios
        .get(url, { signal: abortCont.signal })
        .then((res) => {
          setData(res.data);
          setLoading(false);
          setError(null);
        })
        .catch((e) => {
          if (e.name === "AbortError") {
            console.log("Fetching aborted");
          }
          setLoading(false);
          setError(e.message);
        });
      return abortCont.abort();
    };
    fetchData();
  }, [url]);

  return { data, error, loading };
};

export default useFetch;
