import { store } from "store";
import User, { userLogin, userRegistration } from "Slices/User";
import { userLoginData } from "Constants/user";

describe("User slice test", () => {
  it("should empty in initial state", () => {
    const state = store.getState().user.user;
    expect(state).toEqual({});
  });

  it("should show pending state", () => {
    store.dispatch(userLogin(userLoginData));
    const { products, loading, error } = store.getState().product;
    expect(products).toEqual([]);
    expect(loading).toBe(true);
    expect(error.length).toBe(0);
  });
  // @typeParam — Args arguments for the action creator function

  // @typeParam — P payload type
  
  // @typeParam — T type name
  
  // @typeParam — E optional error type
  
  // @typeParam — M optional meta type
  it("should fetch all products successfull", () => {
    store.dispatch(userLogin.fulfilled(null, "test", userLoginData));
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
