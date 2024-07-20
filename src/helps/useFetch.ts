import { useEffect, useState } from "react";
import { CatigoriysType } from "../components/interfeces";
interface FetchFunction<P,T>{
  (param?:P):Promise<T>
}

interface UseFetchRezult<T>{
  data:T|null|undefined;
  categories?:CatigoriysType[];
  isLoading:boolean;
  err:Error|null;
}


export function useFetch<P,T>(fetchFn:FetchFunction<P,T>, param?:P):UseFetchRezult<T> {
  let [isLoading, setIsisLoading] = useState<boolean>(true);
  let [data, setData] = useState<T|null>(null);
  let [err, setErr] = useState<Error|null>(null);

  const strParam = param ? new URLSearchParams(param).toString() : "";

  useEffect(() => {
    (async () => {
      try {
        setIsisLoading(true);
        let rez = await fetchFn(param);
        setData(rez);
      } catch (error) {
        setErr(error as Error);
      } finally {
        setIsisLoading(false);
      }
    })();
  }, [fetchFn, strParam]);
  //console.log(data);
  return { data, isLoading, err };
}
