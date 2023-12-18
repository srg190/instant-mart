import { render, screen } from "App.test";
import Home from "pages/Home";
import { rest } from "msw";
import { setupServer } from "msw/node";
import userEvent from "@testing-library/user-event";
import data from "./mockData";
import { waitFor } from "App.test";

export const handlers = [
  rest.get("https://fakestoreapi.com/products", async (req, res, ctx) => {
    // await setTimeout(() => {}, 1000);
    return await res(ctx.status(200), ctx.json(data));
  }),
];
// console.log(handlers, " ------");
const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

test("fetches & receives a user after clicking the fetch user button", async () => {
  render(<Home />);

  const user = userEvent.setup();

  // should show no user initially, and not be fetching a user
  expect(screen.getByText(/products/i)).toBeInTheDocument();
  expect(screen.queryByText("Loading...")).not.toBeInTheDocument();

  //   // after clicking the 'Fetch user' button, it should now show that it is fetching the user
  await user.click(screen.getByText("Click"));
  screen.debug();
  //   expect(screen.queryByText("Loading...")).toBeInTheDocument();
  //   expect(screen.getByText(/no user/i)).toBeInTheDocument();

  //   // after some time, the user should be received
  expect(
    await waitFor(() => screen.findByText(data[5].title))
  ).toBeInTheDocument();
  //   expect(screen.queryByText(/no user/i)).not.toBeInTheDocument();
  //   expect(screen.queryByText(/Fetching user\.\.\./i)).not.toBeInTheDocument();
});
