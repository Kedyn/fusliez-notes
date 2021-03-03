import { render, screen } from "@testing-library/react";

import Player from "./Player";
import React from "react";

test("Renders component", () => {
  render(<Player />);
  const element = screen.getByText(/component content/i);
  expect(element).toBeInTheDocument();
});
