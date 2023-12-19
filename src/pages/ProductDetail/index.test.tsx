import { render } from "App.test";
import { productConstants } from "Constants/testConstants";
import ProductContainer, { ProductDetail } from ".";

describe("test cases for product details", () => {
  const mockData = productConstants[2];
  const { getByText } = render(<ProductDetail product={mockData} />);

  it("should display all contents from mockdata", () => {
    expect(getByText(mockData.brand)).toBeInTheDocument();
    expect(getByText(mockData.category)).toBeInTheDocument();
    expect(getByText(mockData.id)).toBeInTheDocument();
    expect(getByText(mockData.price)).toBeInTheDocument();
    expect(getByText(mockData.stock)).toBeInTheDocument();
    expect(getByText(mockData.title)).toBeInTheDocument();
  });
});
