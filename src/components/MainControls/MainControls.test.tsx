import { render, screen } from "@testing-library/react";

import MainControls from "./MainControls";
import React from "react";

test("Renders component", () => {
  render(<MainControls />);
  const element = screen.getByText(/component content/i);
  expect(element).toBeInTheDocument();
});
