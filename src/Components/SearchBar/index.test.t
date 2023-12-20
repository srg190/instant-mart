import { render, waitFor } from "App.test";
import SearchBar from ".";
import userEvent from "@testing-library/user-event";
import { searchBarConstant } from "Constants/testConstants";

describe("test cases for search", () => {
  const { getByTestId, getByText } = render(<SearchBar />);
  const input = getByTestId(searchBarConstant.DATA_TEST_ID);
  const user = userEvent.setup();
  const head = getByTestId(searchBarConstant.DATA_TEST_ID_HEAD);

  it("should take input and return same input after 300ms", async () => {
    user.type(input, searchBarConstant.MATCH_STRING);
    
    // must not be in the docs
    expect(head).not.toHaveTextContent(searchBarConstant.MATCH_STRING);

    // now it shall show
    await waitFor(
      () => expect(head).not.toHaveTextContent(searchBarConstant.MATCH_STRING),
      {
        timeout: 300,
      }
    );
  });
});
