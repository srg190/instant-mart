import { render, screen, waitFor } from "App.test";
import Home from ".";
import {
  CategoryConstant,
  homeConstants,
  navbarConstants,
  productCardConstant,
  productConstants,
  searchBarConstant,
} from "Constants/testConstants";
import userEvent from "@testing-library/user-event";
import Navbar from "Components/NavBar";

describe("test cases for home page", () => {
  const { getByTestId, getByText, getAllByTestId } = render(<Home />);
  const user = userEvent.setup();

  it("should display category, products, and Home", () => {
    expect(getByText(homeConstants.PRODUCTS)).toBeInTheDocument();
    expect(getByText(homeConstants.CATEGORIES)).toBeInTheDocument();
  });

  it("should display products on onLoad", async () => {
    console.log("-----> Fired");
    CategoryConstant.forEach(async (category) => {
      await waitFor(() => expect(getByText(category)).toBeInTheDocument());
    });
  });

  it("should display all products on onload", () => {
    productConstants.forEach(async (product) => {
      await waitFor(() => expect(getByText(product.title)).toBeInTheDocument());
    });
  });

  it("should display prodcuts based on category click", async () => {
    const filteredArray = productConstants.filter(
      (product) => product.category === searchBarConstant.MATCH_STRING
    );

    const displayProducts = await waitFor(() =>
      getAllByTestId(productCardConstant.TEST_ID)
    );

    // if all products diplayed
    expect(displayProducts.length).toBe(productConstants.length);

    //now clicked
    const category = await waitFor(() =>
      getByText(searchBarConstant.MATCH_STRING)
    );
    await user.click(category);
    expect(filteredArray.length).toBe(displayProducts.length);
  });
});

describe("test cases for navbar and homepage", () => {
  const { getByTestId, getAllByTestId } = render(
    <>
      <Navbar />
      <Home />
    </>
  );
  const search = getByTestId(navbarConstants.SEARCH_TEST_ID);
  const wishList = getByTestId(navbarConstants.WISHLIST_TEST_IDL);
  const cart = getByTestId(navbarConstants.CART_TEST_ID);
  const user = userEvent.setup();

  const filteredArray = productConstants.filter(
    (product) => product.category === searchBarConstant.MATCH_STRING
  );

  it("should display all products based on search", async () => {
    await user.type(search, searchBarConstant.MATCH_STRING);
    const displayProducts = await waitFor(() =>
      getAllByTestId(productCardConstant.TEST_ID)
    );
    expect(filteredArray.length).toBe(displayProducts.length);
  });

  it("should display empty if string not matched with any products", async () => {
    await user.type(search, searchBarConstant.UNMATCHED_STRING);
    const displayProducts = await waitFor(() =>
      getAllByTestId(productCardConstant.TEST_ID)
    );
    expect(filteredArray.length).toBe(displayProducts.length);
  });
});
