import { render } from "App.test";
import ProductCard from ".";
import { productCardConstant, productConstants } from "Constants/testConstants";
import userEvent from "@testing-library/user-event";

describe("test cases for product card", () => {
  const mockData = productConstants[0];
  const { getByText, getByTestId } = render(
    <ProductCard quantity={0} {...mockData} />
  );

  const title = getByText(mockData.title);
  const brand = getByText(mockData.brand);
  const cartButton = getByTestId(productCardConstant.CART_BUTTON_ID);
  const user = userEvent.setup();

  it("should display all values using mock data", () => {
    expect(title).toBeInTheDocument();
    expect(brand).toBeInTheDocument();
  });

  it("should increment or decrement based onClick event of +, - button", async () => {
    const InitialQuantity = getByTestId(productCardConstant.QUANTITY_ID);
    const initialCount = InitialQuantity.innerText.split(": ");
    await user.click(getByTestId(productCardConstant.INCREMENT_BUTTON_ID));

    await user.click(getByTestId(productCardConstant.DECREMENT_BUTTON_ID));
    const UpdatedQuantity = getByTestId(productCardConstant.QUANTITY_ID);
    const updatedCount = UpdatedQuantity.innerText.split(": ");

    expect(updatedCount).toBe(initialCount);
  });

  it("should toggle with 'add to cart' with 'remove from cart' on onClick event in addToCart button", async () => {
    const currText = getByTestId(productCardConstant.CART_BUTTON_ID).innerText;
    await user.click(cartButton);
    const updatedText = getByTestId(
      productCardConstant.CART_BUTTON_ID
    ).innerText;
    expect(currText).not.toBe(updatedText);

    await user.click(cartButton);
    const updatedText1 = getByTestId(
      productCardConstant.CART_BUTTON_ID
    ).innerText;
    expect(currText).toBe(updatedText1);
  });
});
