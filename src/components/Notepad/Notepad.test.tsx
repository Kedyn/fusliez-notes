import { render, screen } from "@testing-library/react";

import Notepad from "./Notepad";
import React from "react";

test("Renders component", () => {
  render(<Notepad />);
  const element = screen.getByText(/component content/i);
  expect(element).toBeInTheDocument();
});
