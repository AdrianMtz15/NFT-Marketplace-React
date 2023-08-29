

export function useLocalStorage() {

  const setKey = (lsKey, value) => {
    localStorage.setItem(lsKey, JSON.stringify(value));
  }

  const getKey = (lsKey) => {
    const value = JSON.parse(localStorage.getItem(lsKey));
    return value;
  }

  return {
    setKey,
    getKey
  }
}