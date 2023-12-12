import Signup from ".";
import { render, screen } from "App.test";
import { waitFor } from "App.test";
import { Heading } from "../index.style";
import { H1 } from "Components/Typography";

describe("Form Test", () => {
  it("should be render correctly", async () => {
    const { getByTestId } = render(<H1 data-testid="heading-1">Sign Up</H1>);
    const container = await waitFor(() => getByTestId("heading-1"));
    console.log(container, "---------");
    expect(container.textContent).toMatch("Sign Up");
  });
});