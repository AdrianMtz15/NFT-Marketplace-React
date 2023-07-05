import { useEffect, useState } from "react";

function useLocalStorage(itemKey, initialValue) {
  const [storedValue, setStoredValue] = useState();

  useEffect(() => {
    const item = localStorage.getItem(itemKey);
    item ? setStoredValue(JSON.parse(item)) : setStoredValue(initialValue);

  },[])

  const setItem = (value) => {
    localStorage.setItem(itemKey, JSON.stringify(value));
    setStoredValue(value);
  }

  return [storedValue, setItem]
}



export {
  useLocalStorage
}