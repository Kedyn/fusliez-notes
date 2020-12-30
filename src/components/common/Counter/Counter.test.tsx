import { render, screen } from "@testing-library/react";

import Counter from "./Counter";
import React from "react";

test("Renders component", () => {
  render(<Counter />);
  const element = screen.getByText(/component content/i);
  expect(element).toBeInTheDocument();
});
