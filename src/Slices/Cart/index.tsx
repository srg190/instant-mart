import { createSlice } from "@reduxjs/toolkit";
import { getDataFromLocalStorage, setDataInLocalStorage } from "utilities";

export interface ProductCart {
  id: string;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  isInCart: boolean;
  isInWishList: boolean;
}

export interface CartState {
  error: string;
  cartItems: ProductCart[];
  wishList: ProductCart[];
  loading: boolean;
}

const initialState = {
  cartItems: getDataFromLocalStorage("cartItems"),
  wishList: getDataFromLocalStorage("wishList"),
  loading: false,
  error: "",
} as CartState;

const cartSlice = createSlice({
  name: "productCart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isAvailable = state.cartItems.filter(
        (x) => x.id === action.payload.id
      );
      if (isAvailable.length === 0) {
        action.payload.isInCart = true;
        state.cartItems.push(action.payload);
        setDataInLocalStorage("cartItems", state.cartItems);
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((v) => v !== action.payload.id);
      setDataInLocalStorage("cartItems", state.cartItems);
    },
    addToWishList: (state, action) => {
      const isAvailable = state.wishList.filter(
        (x) => x.id === action.payload.id
      );
      action.payload.isInWishList = true;
      if (isAvailable.length === 0) {
        state.wishList.push(action.payload);
        setDataInLocalStorage("wishList", state.wishList);
      }
    },
    removeFromWishList: (state, action) => {
      state.cartItems = state.cartItems.filter((v) => v !== action.payload.id);
      setDataInLocalStorage("wishList", state.cartItems);
    },
  },
  extraReducers: (builder) => {},
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
