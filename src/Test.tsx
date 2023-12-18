import React, { useState, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import theme from "Styles/theme";
import { ThemeType } from "Styles/theme/index.type";
import { Provider } from "react-redux";
import { store } from "store";

const TestWrapper = ({ children }: { children: ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>("light");
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme[currentTheme]}>{children}</ThemeProvider>
    </Provider>
  );
};

export default TestWrapper;
