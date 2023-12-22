import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit"; // to handle api
import { Api } from "Constants/apis";
import axios from "axios";
import {
  ProductState,
  Product,
  RemoveFromCartAction,
  RemoveFromWishListAction,
  Filter,
} from "./index.type";
import { filterSearch, getDataFromLocalStorage } from "utilities";

const initialState = {
  products: [],
  filteredProducts: [],
  categories: [],
  product: undefined,
  loading: false,
  error: "",
} as ProductState;

const cartItems = getDataFromLocalStorage("cartItems");
const wishList = getDataFromLocalStorage("wishList");

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async (filter?: Filter) => {
    try {
      const response = await axios.get(Api.GET_PRODUCTS, {
        params: {
          ...filter,
        },
      });
      const productsWithFlags = response.data.products.map(
        (product: Product) => ({
          ...product,
          rating: {
            rate: product.rating,
            count: 100,
          },
          isInCart: cartItems.some((item: Product) => item._id == product._id),
          isInWishList: wishList.some(
            (item: Product) => item._id == product._id
          ),
        })
      );
      const data = {
        ...response.data,
        products: [...productsWithFlags],
      };
      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchProductDetail = createAsyncThunk(
  "product/detail",
  async (productId: string) => {
    try {
      const res = await axios.get(Api.GET_PRODUCT_DETAIL + `/${productId}`);
      return res.data.product;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchCategories = createAsyncThunk("product/categories", () => {
  return axios.get(Api.GET_CATEGORIES).then((res) => {
    return res.data;
  });
});

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    filterData: (state, action) => {
      const {
        title,
        price,
        category,
        description,
        rating,
        stock,
        brand,
        keywords,
      } = action.payload;
      if (
        !title &&
        !price &&
        !category &&
        !description &&
        !rating &&
        !stock &&
        !brand &&
        !keywords
      ) {
        // No filters applied, return all products
        state.filteredProducts = [...state.products];
      } else {
        state.filteredProducts = filterSearch(state.products, action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload.products;
      state.filteredProducts = [...state.products];
      state.error = "";
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.error.message || "";
    });

    builder.addCase(fetchCategories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.categories = action.payload;
      state.error = "";
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "";
      state.categories = [];
    });

    builder.addCase(fetchProductDetail.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProductDetail.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload;
      state.error = "";
    });
    builder.addCase(fetchProductDetail.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "";
      state.product = undefined;
    });

    builder.addCase(
      "cart/removeFromCart",
      (state, action: RemoveFromCartAction) => {
        state.products = state.products.map((v) => {
          if (v._id == action.payload.id) {
            return {
              ...v,
              isInCart: false,
            };
          }
          return v;
        });
      }
    );
    builder.addCase(
      "cart/removeFromWishList",
      (state, action: RemoveFromWishListAction) => {
        state.products = state.products.map((v) => {
          if (v._id == action.payload.id) {
            return {
              ...v,
              isInWishList: false,
            };
          }
          return v;
        });
      }
    );
  },
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
