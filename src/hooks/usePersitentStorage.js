export const usePersitentStorage = () => {
  const addItem = (key, info) => {
    localStorage.setItem(key, JSON.stringify(info));
  };

  const clearAll = () => {
    localStorage.clear();
  };

  const getItem = (key) => {
    const response = localStorage.getItem(key);
    return JSON.parse(response);
  };

  return { addItem, clearAll, getItem };
};
