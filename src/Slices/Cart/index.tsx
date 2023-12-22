import { createSlice } from "@reduxjs/toolkit";
import { getDataFromLocalStorage, setDataInLocalStorage } from "utilities";
import { ProductCart, CartState } from "./index.type";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Api } from "Constants/apis";
import axios from "axios";
import { CartProduct } from "Constants/apiRes.type";
import { AddToCartWishGlobReq } from "Constants/apiReq.type";
import { Product } from "Constants/common.type";

const initialState = {
  _id: "",
  isInWishlist: {},
  isInCartList: {},
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

export const fetchUserCartItems = createAsyncThunk(
  "cart/userCartItems",
  async (_, thunkApi) => {
    try {
      const res = await axios.get(Api.GET_CART_ITEMS);
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return thunkApi.rejectWithValue({
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
      state.isInCartList = {
        [action.payload._id]: true,
      };
    },

    addToWishList: (state, action) => {
      state.isInWishlist = {
        [action.payload._id]: true,
      };
    },

    removeFromCart: (state, action) => {
      state.isInCartList = {
        [action.payload._id]: false,
      };
    },

    removeFromWishList: (state, action) => {
      state.isInWishlist = {
        [action.payload._id]: false,
      };
    },

    clearState: (state) => {
      state.error = "";
      state.loading = false;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchAddToCart.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAddToCart.fulfilled, (state, action) => {
      state.loading = false;
      state._id = action.payload.cart._id;
      setDataInLocalStorage("cart", state._id);
      action.payload.cart.products.forEach((v: CartProduct) => {
        state.isInCartList = {
          [v.product || ""]: v.isInCart,
        };
      });
      action.payload.cart.products.forEach((v: CartProduct) => {
        state.isInWishlist = {
          [v.product || ""]: v.isInWishlist,
        };
      });
      state.error = "";
    });
    builder.addCase(fetchAddToCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "";
      state.isInCartList = {};
      state.isInWishlist = {};
    });
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
