import { render } from "App.test";
import ButtonTest from "./ButtonTest";
import { ButtonConstant } from "Constants/testConstants";
import userEvent from "@testing-library/user-event";

describe.only("test for custom button component", () => {
  const { getByText, getByTestId } = render(<ButtonTest />);
  const text = getByText(ButtonConstant.BUTTON_TEXT1);
  const button = getByTestId(ButtonConstant.BUTTON_ID);
  const user = userEvent.setup();

  it("should show initial text", () => {
    expect(text).toBeInTheDocument();
  });

  it("should toggle with another text on click", async () => {
    await user.click(text);
    expect(text).not.toBeInTheDocument();
    await user.click(button);
    expect(button).toHaveTextContent(ButtonConstant.BUTTON_TEXT1);
  });
});
