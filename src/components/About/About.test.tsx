import { render, screen } from "@testing-library/react";

import About from "./About";
import React from "react";

test("Renders component", () => {
  render(<About />);
  const element = screen.getByText(/component content/i);
  expect(element).toBeInTheDocument();
});
