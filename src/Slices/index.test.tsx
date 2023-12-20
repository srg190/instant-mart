import { render, screen } from "App.test";
import Home from "pages/Home";
import { http, HttpResponse, delay } from 'msw'
import { setupServer } from 'msw/node'
import userEvent from "@testing-library/user-event";
import data from "../Constants/mockData";
import { waitFor } from "App.test";

export const handlers = [
  http.get('/api/user', async () => {
    await delay(150)
    return HttpResponse.json(data)
  })
]
// console.log(handlers, " ------");
const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

test('fetches & receives a user after clicking the fetch user button', async () => {
  // renderWithProviders(<UserDisplay />)

  // // should show no user initially, and not be fetching a user
  // expect(screen.getByText(/no user/i)).toBeInTheDocument()
  // expect(screen.queryByText(/Fetching user\.\.\./i)).not.toBeInTheDocument()

  // // after clicking the 'Fetch user' button, it should now show that it is fetching the user
  // fireEvent.click(screen.getByRole('button', { name: /Fetch user/i }))
  // expect(screen.getByText(/no user/i)).toBeInTheDocument()

  // // after some time, the user should be received
  // expect(await screen.findByText(/John Smith/i)).toBeInTheDocument()
  // expect(screen.queryByText(/no user/i)).not.toBeInTheDocument()
  // expect(screen.queryByText(/Fetching user\.\.\./i)).not.toBeInTheDocument()
})


// https://medium.com/@babux1/how-to-test-redux-connected-components-with-react-testing-library-a-comprehensive-tutorial-e5f4a0afbd4c