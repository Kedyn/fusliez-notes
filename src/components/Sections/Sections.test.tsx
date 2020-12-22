import { render, screen } from "@testing-library/react";

import React from "react";
import Sections from "./Sections";

test("Renders component", () => {
  render(<Sections />);
  const element = screen.getByText(/component content/i);
  expect(element).toBeInTheDocument();
});
