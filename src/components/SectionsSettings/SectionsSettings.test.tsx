import { render, screen } from "@testing-library/react";

import React from "react";
import SectionsSettings from "./SectionsSettings";

test("Renders component", () => {
  render(<SectionsSettings />);
  const element = screen.getByText(/component content/i);
  expect(element).toBeInTheDocument();
});
