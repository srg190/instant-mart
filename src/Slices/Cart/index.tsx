import { createSlice } from "@reduxjs/toolkit";
import { getDataFromLocalStorage, setDataInLocalStorage } from "utilities";

export interface ProductCart {
  id: string;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: number;
  stock: number;
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
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isAvailable = state.cartItems.filter(
        (x) => x.id === action.payload.id
      );
      if (isAvailable.length === 0) {
        action.payload.isInCart = true;
        state.cartItems = [...state.cartItems, action.payload];
        setDataInLocalStorage("cartItems", state.cartItems);
      }
    },
    addToWishList: (state, action) => {
      const isAvailable = state.wishList.filter(
        (x) => x.id === action.payload.id
      );
      if (isAvailable.length === 0) {
        action.payload.isInWishList = true;
        state.wishList = [...state.wishList, action.payload];
        setDataInLocalStorage("wishList", state.wishList);
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (v) => v.id != action.payload.id
      );
      setDataInLocalStorage("cartItems", state.cartItems);
    },
    removeFromWishList: (state, action) => {
      state.wishList = state.wishList.filter((v) => v.id != action.payload.id);
      setDataInLocalStorage("wishList", state.wishList);
    },
  },
  extraReducers: (builder) => {},
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
