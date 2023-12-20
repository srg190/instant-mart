import { store } from "store";
import { fetchProductDetail, fetchProducts } from "Slices/Product";
import mockData from "Constants/mockData";
import categoriesList from "Constants/categoriesList";

describe("Products slice test", () => {
  it("should empty in initial state", () => {
    const state = store.getState().product.products;
    expect(state).toEqual([]);
  });

  it("should show pending state", () => {
    store.dispatch(fetchProducts());
    const { products, loading, error } = store.getState().product;
    expect(products).toEqual([]);
    expect(loading).toBe(true);
    expect(error.length).toBe(0);
  });

  it("should fetch all products successfull", () => {
    store.dispatch(fetchProducts.fulfilled(mockData.products, "test"));
    const { products, loading, error } = store.getState().product;
    expect(products).toEqual(mockData.products);
    expect(loading).toBe(false);
    expect(error.length).toBe(0);
  });

  it("should handle product error", () => {
    const mockError = "An error occured";
    store.dispatch(fetchProducts.rejected(new Error(mockError), "test"));
    const { products, loading, error } = store.getState().product;
    expect(products).toEqual([]);
    expect(loading).toBe(false);
    expect(error.length).not.toBe(0);
  });
});

describe("Product detail slice test", () => {
  it("should empty in initial state", () => {
    const state = store.getState().product.product;
    expect(state).toEqual(undefined);
  });

  it("should give pending state of product detail", () => {
    store.dispatch(fetchProductDetail("1"));
    const { loading, error, product } = store.getState().product;
    expect(product).toEqual(undefined);
    expect(loading).toBe(true);
    expect(error.length).toBe(0);
  });

  it("should fetch product detail successfull", () => {
    store.dispatch(fetchProducts.fulfilled(mockData.products[0], "test"));
    const { product, loading, error } = store.getState().product;
    expect(product).toEqual(mockData.products[0]);
    expect(loading).toBe(false);
    expect(error.length).toBe(0);
  });

  it("should handle product error", () => {
    const mockError = "An error occured";
    store.dispatch(fetchProducts.rejected(new Error(mockError), "test"));
    const { product, loading, error } = store.getState().product;
    expect(product).toEqual(undefined);
    expect(loading).toBe(false);
    expect(error.length).not.toBe(0);
  });
});

describe("Product categories slice test", () => {
  it("should empty in initial state", () => {
    const state = store.getState().product.categories;
    expect(state).toEqual([]);
  });

  it("should give pendeing state categories list", () => {
    store.dispatch(fetchProductDetail("1"));
    const { loading, error, categories } = store.getState().product;
    expect(categories).toEqual([]);
    expect(loading).toBe(true);
    expect(error.length).toBe(0);
  });

  it("should fetch category list successfull", () => {
    store.dispatch(fetchProducts.fulfilled(categoriesList, "test"));
    const { categories, loading, error } = store.getState().product;
    expect(categories).toEqual(categoriesList);
    expect(loading).toBe(false);
    expect(error.length).toBe(0);
  });

  it("should handle product error", () => {
    const mockError = "An error occured";
    store.dispatch(fetchProducts.rejected(new Error(mockError), "test"));
    const { categories, loading, error } = store.getState().product;
    expect(categories).toEqual([]);
    expect(loading).toBe(false);
    expect(error.length).not.toBe(0);
  });
});
