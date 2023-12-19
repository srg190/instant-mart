import React, { ReactElement } from "react";
import { render, screen, RenderOptions } from "@testing-library/react";
import TestWrapper from "Test";
import { getConfig } from "@testing-library/react";

console.log(getConfig());

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
