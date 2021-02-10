import { render, screen } from "@testing-library/react";

import MapPlayers from "./MapPlayers";
import React from "react";

test("Renders component", () => {
  render(<MapPlayers />);
  const element = screen.getByText(/component content/i);
  expect(element).toBeInTheDocument();
});
