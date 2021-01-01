import { render, screen } from "@testing-library/react";

import ButtonGroup from "./ButtonGroup";
import React from "react";

test("Renders component", () => {
  render(<ButtonGroup />);
  const element = screen.getByText(/component content/i);
  expect(element).toBeInTheDocument();
});
