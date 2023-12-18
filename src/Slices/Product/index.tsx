import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit"; // to handle api
import { Api } from "Constants/apis";
import axios from "axios";
import {
  ProductState,
  Product,
  RemoveFromCartAction,
  RemoveFromWishListAction,
} from "./index.type";
import { getDataFromLocalStorage } from "utilities";

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
  async () => {
    try {
      const response = await axios.get(Api.GET_PRODUCTS);
      const productsWithFlags = response.data.products.map(
        (product: Product) => ({
          ...product,
          isInCart: cartItems.some((item: Product) => item.id == product.id),
          isInWishList: wishList.some((item: Product) => item.id == product.id),
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
      const res = await axios.get(Api.GET_PRODUCT_DETAIL + `${productId}`, {
        params: { productId },
      });
      return res.data;
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
        state.filteredProducts = state.products.filter((product) => {
          const matchesTitle =
            title && product.title.toLowerCase().includes(title.toLowerCase());
          const matchesPrice = price && product.price === price;
          const matchesCategory =
            category &&
            product.category.toLowerCase().includes(category.toLowerCase());
          const matchesDescription =
            description &&
            product.description
              .toLowerCase()
              .includes(description.toLowerCase());
          const matchesRating = rating && product.rating === rating;
          const matchesStock = stock && product.stock === stock;
          const matchesBrand =
            brand && product.brand.toLowerCase().includes(brand.toLowerCase());
          const matchesKeywords =
            keywords &&
            (product.title.toLowerCase().includes(keywords.toLowerCase()) ||
              product.description
                .toLowerCase()
                .includes(keywords.toLowerCase()) ||
              product.category.toLowerCase().includes(keywords.toLowerCase()) ||
              product.brand.toLowerCase().includes(keywords.toLowerCase()));
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
        // console.log(state.filteredProducts);
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
      state.limit = action.payload.limit;
      state.total = action.payload.total;
      state.skip = action.payload.skip;
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
          if (v.id == action.payload.id) {
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
          if (v.id == action.payload.id) {
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
