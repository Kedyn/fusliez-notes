import { render, screen } from "@testing-library/react";

import React from "react";
import Settings from "./Settings";

test("Renders component", () => {
  render(<Settings />);
  const element = screen.getByText(/component content/i);
  expect(element).toBeInTheDocument();
});
