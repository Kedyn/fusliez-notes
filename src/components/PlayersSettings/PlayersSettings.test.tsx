import { render, screen } from "@testing-library/react";

import PlayersSettings from "./PlayersSettings";
import React from "react";

test("Renders component", () => {
  render(<PlayersSettings />);
  const element = screen.getByText(/component content/i);
  expect(element).toBeInTheDocument();
});
