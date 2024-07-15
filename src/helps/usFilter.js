import { useState } from "react";

export function usFilter(initialFilter) {
  const [filter, setFilter] = useState(initialFilter);

  function chengFilter(key, value) {
    setFilter((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  }
  return { filter, chengFilter };
}
