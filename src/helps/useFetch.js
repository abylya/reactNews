import { useEffect, useState } from "react";

export function useFetch(fetchFn, param) {
  let [isloading, setIsloading] = useState(true);
  let [data, setData] = useState(null);
  let [err, setErr] = useState(null);

  const strParam = param ? new URLSearchParams(param).toString() : "";

  useEffect(() => {
    (async () => {
      try {
        isloading = true;
        let rez = await fetchFn(param);
        setData(rez);
      } catch (error) {
        setErr(error);
      } finally {
        setIsloading(false);
      }
    })();
  }, [fetchFn, strParam]);
  //console.log(data);
  return { data, isloading, err };
}
