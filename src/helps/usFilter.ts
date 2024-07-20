import { useState } from "react";
import { IFilters } from "../components/interfeces";

export function usFilter(initialFilter:IFilters) {
  const [filter, setFilter] = useState<IFilters>(initialFilter);

  function chengFilter(key:string, value:string|number|null) {
    setFilter((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  }
  return { filter, chengFilter };
}
