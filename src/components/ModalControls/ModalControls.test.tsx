import { render, screen } from "@testing-library/react";

import ModalControls from "./ModalControls";
import React from "react";

test("Renders component", () => {
  render(<ModalControls />);
  const element = screen.getByText(/component content/i);
  expect(element).toBeInTheDocument();
});
