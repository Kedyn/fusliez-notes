import { render, screen } from "@testing-library/react";

import Changelog from "./Changelog";
import React from "react";

test("Renders component", () => {
  render(<Changelog />);
  const element = screen.getByText(/component content/i);
  expect(element).toBeInTheDocument();
});
