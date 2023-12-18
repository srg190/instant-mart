import { render, screen, waitFor } from "App.test";
import Box from ".";

describe("test case for custom box", () => {
  const { getByText } = render(<Box color="red">Hello</Box>);
  const text = getByText("Hello");

  it("it should be render", () => {
    expect(text).toBeInTheDocument();
  });

  it("should have red text color", async () => {
    expect(text).toHaveStyle(`color: red`);
  });
});
