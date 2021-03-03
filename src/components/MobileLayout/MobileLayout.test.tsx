import { render, screen } from "@testing-library/react";

import MobileLayout from "./MobileLayout";
import React from "react";

test("Renders component", () => {
  render(<MobileLayout />);
  const element = screen.getByText(/component content/i);
  expect(element).toBeInTheDocument();
});
