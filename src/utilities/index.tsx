export const ratingCalculator = () => {};

export const paymentCalculator = () => {};

export const cacheLRU = () => {};

export const setDataInLocalStorage = (key: string, val: any) => {
  localStorage.setItem(key, JSON.stringify(val));
};

export const getDataFromLocalStorage = (key: string) => {
  const data = localStorage.getItem(key) || "[]";
  return JSON.parse(data);
};

