import { render, screen } from "@testing-library/react";

import React from "react";
import Section from "./Section";

test("Renders component", () => {
  render(<Section />);
  const element = screen.getByText(/component content/i);
  expect(element).toBeInTheDocument();
});
