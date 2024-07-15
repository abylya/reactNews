import { useEffect, useState } from "react";

export function useFetch(fetchFn, param) {
  let [isLoading, setIsisLoading] = useState(true);
  let [data, setData] = useState(null);
  let [err, setErr] = useState(null);

  const strParam = param ? new URLSearchParams(param).toString() : "";

  useEffect(() => {
    (async () => {
      try {
        setIsisLoading(true);
        let rez = await fetchFn(param);
        setData(rez);
      } catch (error) {
        setErr(error);
      } finally {
        setIsisLoading(false);
      }
    })();
  }, [fetchFn, strParam]);
  //console.log(data);
  return { data, isLoading, err };
}
