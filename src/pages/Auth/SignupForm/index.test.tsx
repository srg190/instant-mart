import userEvent from "@testing-library/user-event";
import Signup from ".";
import { act, getByTestId, render, screen, waitFor, cleanup } from "App.test";
import { isConstructorDeclaration } from "typescript";
import {
  FormValue,
  UserMockData,
  ValidationCycle,
  paraTestId,
} from "Constants/testConstants";

describe("Sign Up Form Test", () => {
  it("should be render correctly", async () => {
    render(<Signup />);

    const textElement = await waitFor(() => screen.getByTestId("heading-1"));
    expect(textElement).toBeInTheDocument();
  });

  it("should give exact test", async () => {
    render(<Signup />);

    const textElement = await waitFor(() => screen.getByText("Sign Up"));
    expect(textElement).toBeInTheDocument();
  });

  it("for Rendering and Form submission", async () => {
    const handleSubmitMock = jest.fn();
    render(<Signup onHandle={handleSubmitMock} />);
    const user = userEvent.setup();
    await user.type(screen.getByTestId(FormValue.EMAIL), UserMockData.EMAIL);
    await user.type(
      screen.getByTestId(FormValue.PASSWORD),
      UserMockData.PASSWORD
    );
    await user.type(
      screen.getByTestId(FormValue.CONFIRM_PASSWORD),
      UserMockData.CONFIRM_PASSWORD
    );
    await user.type(screen.getByTestId(FormValue.STREET), UserMockData.STREET);
    await user.type(
      screen.getByTestId(FormValue.LOCATION),
      UserMockData.LOCATION
    );
    await user.type(
      screen.getByTestId(FormValue.HOUSE_NUMBER),
      UserMockData.HOUSE_NUMBER
    );
    await user.type(screen.getByTestId(FormValue.CITY), UserMockData.CITY);

    await user.click(screen.getByTestId(FormValue.BUTTON));

    await waitFor(() =>
      expect(handleSubmitMock).toHaveBeenCalledWith({
        email: UserMockData.EMAIL,
        password: UserMockData.PASSWORD,
        confirmPassoword: UserMockData.CONFIRM_PASSWORD,
        address: {
          street: UserMockData.STREET,
          location: UserMockData.LOCATION,
          houseNumber: UserMockData.HOUSE_NUMBER,
          city: UserMockData.CITY,
        },
      })
    );
  });

  it("for failed cases", async () => {
    const handleSubmitMock = jest.fn();
    render(<Signup onHandle={handleSubmitMock} />);
    const user = userEvent.setup();

    await user.click(screen.getByTestId(FormValue.BUTTON));

    const email = screen.getByTestId(paraTestId.par1);
    const password = screen.getByTestId(paraTestId.par2);
    const conPassword = screen.getByTestId(paraTestId.par3);
    const street = screen.getByTestId(paraTestId.par4);
    const location = screen.getByTestId(paraTestId.par5);
    const houseNum = screen.getByTestId(paraTestId.par6);
    const city = screen.getByTestId(paraTestId.par7);

    await waitFor(() => {
      expect(email.textContent).toMatch(ValidationCycle.EMPTY_EMAIL);
      expect(password.textContent).toMatch(ValidationCycle.EMPTY_PASSWORD);
      expect(conPassword.textContent).toMatch(
        ValidationCycle.EMPTY_CONFIRM_PASSWORD
      );
      expect(street.textContent).toMatch(ValidationCycle.EMPTY_STREET);
      expect(location.textContent).toMatch(ValidationCycle.EMPTY_LOCATION);
      expect(houseNum.textContent).toMatch(ValidationCycle.EMPTY_HOUSE_NUMBER);
      expect(city.textContent).toMatch(ValidationCycle.EMPTY_CITY);
    });
  });

  describe("Checking and validating All Inputs in Form", () => {
    it("Testing validations on Email", async () => {
      render(<Signup />);
      const user = userEvent.setup();
      const emailInput = screen.getByTestId(FormValue.EMAIL);
      const outside = screen.getByTestId(FormValue.OUTSIDE);

      await user.click(emailInput);
      await user.click(outside);

      const emailMessage = screen.getByTestId(paraTestId.par1);
      expect(emailMessage).toHaveTextContent(ValidationCycle.EMPTY_EMAIL);

      await user.type(emailInput, UserMockData.INCORRECT_EMAIL);
      expect(emailMessage).toHaveTextContent(ValidationCycle.INCORRECT_EMAIL);

      await userEvent.clear(emailInput);
      await user.type(emailInput, UserMockData.EMAIL);

      expect(emailInput).toHaveValue(UserMockData.EMAIL);

      expect(emailMessage).not.toBeInTheDocument();
    });

    it("Testing validations on Password And Confirm Passowrd", async () => {
      render(<Signup />);
      const user = userEvent.setup();
      const passwordInput = screen.getByTestId(FormValue.PASSWORD);
      const confirmPasswordInput = screen.getByTestId(
        FormValue.CONFIRM_PASSWORD
      );
      const outside = screen.getByTestId(FormValue.OUTSIDE);

      await user.type(
        passwordInput,
        UserMockData.LESS_THAN_REQUIRED_PASSWORD_SIZE
      );

      await user.click(confirmPasswordInput);

      const passwordMessage = screen.getByTestId(paraTestId.par2);

      expect(passwordMessage).toHaveTextContent(
        ValidationCycle.PASSWORD_LESS_THAN_ERROR
      );

      console.log(confirmPasswordInput.getAttribute("disabled"), " ----");

      expect(confirmPasswordInput).toBeDisabled();

      await user.clear(passwordInput);
      await user.type(passwordInput, UserMockData.PASSWORD);

      expect(confirmPasswordInput).not.toBeDisabled();

      await user.type(
        confirmPasswordInput,
        UserMockData.UNMATCH_CONFIRM_PASSWORD
      );

      await user.click(outside);

      const confirmPasswordInputMessage = screen.getByTestId(paraTestId.par3);

      expect(confirmPasswordInputMessage).toHaveTextContent(
        ValidationCycle.PASSWORD_UNMATCH_ERROR
      );

      await user.clear(confirmPasswordInput);
      await user.type(confirmPasswordInput, UserMockData.CONFIRM_PASSWORD);

      expect(confirmPasswordInputMessage).not.toBeInTheDocument();
    });
  });
});
