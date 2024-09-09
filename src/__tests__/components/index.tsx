import React from "react";
import { render, RenderOptions } from "@testing-library/react";
import { MantineProvider } from "@mantine/core";

const renderWithMantineProvider = (
  ui: React.ReactElement,
  options?: RenderOptions
) => {
  return render(<MantineProvider>{ui}</MantineProvider>, options);
};

export { renderWithMantineProvider };
