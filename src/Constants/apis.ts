const BASE_URL = "http://localhost:4000/api/v1";
export const Api = {
  GET_PRODUCTS: `${BASE_URL}/products`,
  GET_CATEGORIES: "https://dummyjson.com/products/categories",
  GET_PRODUCT_DETAIL: `${BASE_URL}/product`,
  REGISTER_USER: `${BASE_URL}/register`,
  LOGIN_USER: `${BASE_URL}/login`,
  ADD_TO_CART: `${BASE_URL}/addToCart`,
  ADD_TO_WISHLIST: `${BASE_URL}/addToWishlist`,
  ADD_TO_CART_WISHLIST: `${BASE_URL}/addToCartWishList`,
  REMOVE_FROM_CART: `${BASE_URL}/removeFromCart`,
  REMOVE_FROM_WISHLIST: `${BASE_URL}/removeFromWishlist`,
  ADD_TO_CART_GLOBAL: `${BASE_URL}/addToCartWish`,
  GET_CART_ITEMS: `${BASE_URL}/getAllCartItems`,
};
