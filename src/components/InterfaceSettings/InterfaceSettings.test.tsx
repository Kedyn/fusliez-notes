import { render, screen } from "@testing-library/react";

import InterfaceSettings from "./InterfaceSettings";
import React from "react";

test("Renders component", () => {
  render(<InterfaceSettings />);
  const element = screen.getByText(/component content/i);
  expect(element).toBeInTheDocument();
});
