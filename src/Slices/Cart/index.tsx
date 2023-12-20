import { createSlice } from "@reduxjs/toolkit";
import { getDataFromLocalStorage, setDataInLocalStorage } from "utilities";
import { ProductCart, CartState } from "./index.type";

const initialState = {
  cartItems: getDataFromLocalStorage("cartItems"),
  wishList: getDataFromLocalStorage("wishList"),
  loading: false,
  error: "",
} as CartState;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isAvailable = state.cartItems.filter(
        (x) => x._id === action.payload._id
      );
      if (isAvailable.length === 0) {
        action.payload.isInCart = true;
        state.cartItems = [...state.cartItems, action.payload];
        setDataInLocalStorage("cartItems", state.cartItems);
      }
    },
    addToWishList: (state, action) => {
      const isAvailable = state.wishList.filter(
        (x) => x._id === action.payload._id
      );
      if (isAvailable.length === 0) {
        action.payload.isInWishList = true;
        state.wishList = [...state.wishList, action.payload];
        setDataInLocalStorage("wishList", state.wishList);
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (v) => v._id !== action.payload._id
      );
      setDataInLocalStorage("cartItems", state.cartItems);
    },
    removeFromWishList: (state, action) => {
      state.wishList = state.wishList.filter((v) => v._id != action.payload._id);
      setDataInLocalStorage("wishList", state.wishList);
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
