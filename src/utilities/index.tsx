import { Product, Filter } from "Constants/common.type";

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

export const setTokenIntoCookies = (token: string) => {
  document.cookie = `token=${token}`;
};

export const filterSearch = (
  products: Product[],
  {
    title,
    price,
    category,
    description,
    rating,
    stock,
    brand,
    keywords,
  }: Filter
) => {
  const newData = products.filter((product) => {
    const matchesTitle =
      title &&
      product.title &&
      product.title.toLowerCase().includes(title.toLowerCase());
    const matchesPrice = price && product.price === price;
    const matchesCategory =
      category &&
      product.category &&
      product.category.toLowerCase().includes(category.toLowerCase());
    const matchesDescription =
      description &&
      product.description &&
      product.description.toLowerCase().includes(description.toLowerCase());
    const matchesRating = rating && product.rating === rating;
    const matchesStock = stock && product.stock === stock;
    const matchesBrand =
      brand &&
      product.brand &&
      product.brand.toLowerCase().includes(brand.toLowerCase());
    const matchesKeywords =
      keywords &&
      ((product.title &&
        product.title.toLowerCase().includes(keywords.toLowerCase())) ||
        (product.description &&
          product.description.toLowerCase().includes(keywords.toLowerCase())) ||
        (product.category &&
          product.category.toLowerCase().includes(keywords.toLowerCase())) ||
        (product.brand &&
          product.brand.toLowerCase().includes(keywords.toLowerCase())));
    // Check if any specified filter matches
    return (
      matchesTitle ||
      matchesPrice ||
      matchesCategory ||
      matchesDescription ||
      matchesRating ||
      matchesStock ||
      matchesBrand ||
      matchesKeywords
    );
  });
  return newData;
};
