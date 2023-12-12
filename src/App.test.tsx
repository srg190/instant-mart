import React, { ReactElement } from "react";
import { render, screen, RenderOptions } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => {
  console.log("twsatbhjbsahfdsa");
  return render(ui, {
    wrapper: App,
    ...options,
  });
};

export * from "@testing-library/react";
export { customRender as render };
