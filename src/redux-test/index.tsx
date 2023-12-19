import { configureStore } from "@reduxjs/toolkit";
import productReducer from "Slices/Product";
import { store } from "store";
import { fetchProducts } from "Slices/Product";
import mockData from "Slices/mockData";

jest.mock("src/config/axios", () => ({
  get: jest.fn(),
}));
jest.mock("src/config/headers", () => ({
  getHeaders: jest.fn(),
}));
jest.mock("constants/apis", () => "https://dummyjson.com/products");

describe("user slice", () => {
  it("should handle a products pending state", () => {
    store.dispatch(fetchProducts());
    const { product } = store.getState();
    const { loading, error } = product;
    expect(loading).toBe(true);
    expect(error).toBe("");
  });

  it("should handle a successful get all products", () => {
    const mockUserData = mockData;
    store.dispatch(fetchProducts.fulfilled(mockUserData));
    const { product } = store.getState();
    expect(product.loading).toBe(false);
    expect(product.error).toBe('');
    expect(product.products).toEqual(mockUserData);
  });

  it("should handle a failed user data fetch", () => {
    const mockError = "An error occurred";
    store.dispatch(fetchProducts.rejected(mockError));
    const { product } = store.getState();
    expect(product.error.length).toBe(true);
  });

//   it("should handle clearing the state", () => {
//     store.dispatch(clearState());
//     const { user } = store.getState();
//     const expectedState = {
//       data: {},
//       isLoading: false,
//       isSuccess: false,
//       isError: false,
//       error: null,
//     };

//     expect(user).toEqual(expectedState);
//   });
});
