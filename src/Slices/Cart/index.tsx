import { createSlice } from "@reduxjs/toolkit";
import { getDataFromLocalStorage, setDataInLocalStorage } from "utilities";
import { ProductCart, CartState } from "./index.type";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Api } from "Constants/apis";
import axios from "axios";
import { CartProduct } from "Constants/apiRes.type";
import { AddToCartWishGlobReq } from "Constants/apiReq.type";

const initialState = {
  _id: "",
  cartItems: [],
  wishList: [],
  loading: false,
  error: "",
} as CartState;

export const fetchAddToCart = createAsyncThunk(
  "cart/addToCart",
  async (data: AddToCartWishGlobReq, thunkAPI) => {
    try {
      const res = await axios.post(Api.ADD_TO_CART_GLOBAL, data);
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue({
          error: error.response?.data?.message as string,
        });
      } else {
        return "An error occurred";
      }
    }
  }
);

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
      state.wishList = state.wishList.filter(
        (v) => v._id != action.payload._id
      );
      setDataInLocalStorage("wishList", state.wishList);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAddToCart.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAddToCart.fulfilled, (state, action) => {
      state.loading = false;
      state._id = action.payload._id;
      state.cartItems = action.payload.cart.products.filter(
        (v: CartProduct) => v.isInCart === true
      );
      state.wishList = action.payload.cart.products.filter(
        (v: CartProduct) => v.isInWishlist === true
      );
      state.error = "";
    });
    builder.addCase(fetchAddToCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "";
      state.cartItems = [];
      state.wishList = [];
    });
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
