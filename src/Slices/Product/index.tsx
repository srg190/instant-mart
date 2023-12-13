import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit"; // to handle api
import axios from "axios";

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export interface ProductState {
  error: string;
  products: Product[];
  loading: boolean;
  filteredProducts?: Product[];
}

const initialState = {
  products: [],
  filteredProducts: [],
  loading: false,
  error: "",
} as ProductState;

export const fetchProducts = createAsyncThunk("product/fetchProducts", () => {
  return axios
    .get("https://fakestoreapi.com/products")
    .then((res) => res.data.map((i: Product) => i));
});

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    filterData: (state, action) => {
      if (action.payload.length === 0) {
        state.filteredProducts = [...state.products];
      } else {
        state.filteredProducts = state.products.filter(
          (v) =>
            v ===
            (v.title.toLowerCase().includes(action.payload.toLowerCase()) ||
            v.category.toLowerCase().includes(action.payload.toLowerCase())
              ? v
              : null)
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.filteredProducts = action.payload;
      state.error = "";
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.error.message || "";
    });
  },
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
