import { render, screen } from "@testing-library/react";

import DesktopLayout from "./DesktopLayout";
import React from "react";

test("Renders component", () => {
  render(<DesktopLayout />);
  const element = screen.getByText(/component content/i);
  expect(element).toBeInTheDocument();
});
