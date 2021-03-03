import { render, screen } from "@testing-library/react";

import Maps from "./Maps";
import React from "react";

test("Renders component", () => {
  render(<Maps />);
  const element = screen.getByText(/component content/i);
  expect(element).toBeInTheDocument();
});
