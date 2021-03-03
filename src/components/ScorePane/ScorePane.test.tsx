import { render, screen } from "@testing-library/react";

import React from "react";
import ScorePane from "./ScorePane";

test("Renders component", () => {
  render(<ScorePane />);
  const element = screen.getByText(/component content/i);
  expect(element).toBeInTheDocument();
});
