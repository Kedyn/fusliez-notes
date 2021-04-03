import { render, screen } from "@testing-library/react";

import Input from "./Input";
import React from "react";

test("Renders component", () => {
  render(<Input />);
  const element = screen.getByText(/component content/i);
  expect(element).toBeInTheDocument();
});
