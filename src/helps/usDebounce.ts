import { useEffect, useState } from "react";

export default function usDebounce(value:string|number|null, delay:number) {
  let [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      //console.log(debouncedValue);
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
