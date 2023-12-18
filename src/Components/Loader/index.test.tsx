import { render } from "App.test";
import Loader from ".";

it("should show Loading...", () => {
  const { getByText } = render(<Loader />);
  expect(getByText("Loading...")).toBeInTheDocument();
});
