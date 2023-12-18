import Signup from ".";
import { render, screen } from "@testing-library/react";
import { waitFor } from "App.test";
import { Heading } from "../index.style";
import { H1 } from "Components/Typography";
import { ThemeProvider, useTheme } from "styled-components";
import theme from "Styles/theme";
import { ReactNode } from "react";

// const CustomTheme = ({ child }: { child: ReactNode }) => {
//   const theme = useTheme();
//   return <ThemeProvider theme={theme}>{child}</ThemeProvider>;
// };

describe("Form Test", () => {
  it("should be render correctly", async () => {
    render(<Signup />);
    const textElement = await waitFor(() => screen.getByText("Sign UP"));
    expect(textElement).toBeInTheDocument();
    // // console.log(<H1 />);
    // const container = await waitFor(() => getByTestId("heading-1"));
    // expect(container.textContent).toMatch("Sign Up");
  });
});
