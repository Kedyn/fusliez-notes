import { render, screen } from "@testing-library/react";

import Map from "./Map";
import React from "react";

test("Renders component", () => {
  render(<Map />);
  const element = screen.getByText(/component content/i);
  expect(element).toBeInTheDocument();
});
