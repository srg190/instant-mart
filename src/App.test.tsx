import React, { ReactElement } from "react";
import { render, screen, RenderOptions } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";
import TestWrapper from "Test";

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => {
  return render(ui, {
    wrapper: TestWrapper,
    ...options,
  });
};

export * from "@testing-library/react";
export { customRender as render };
