import { fireEvent, render, screen } from "@testing-library/react";

import DefaultComponentWrapper from "./DefaultComponentWrapper";
import DesktopLayout from "components/DesktopLayout";
import React from "react";
import registerFaIcons from "utils/registerFaIcons";
import store from "store";

describe("DesktopLayout tests", () => {
  beforeEach(async () => {
    registerFaIcons();
    await render(
      <DefaultComponentWrapper testStore={store}>
        <DesktopLayout />
      </DefaultComponentWrapper>
    );
  });

  test("expand button test", async () => {
    const expandButton = await screen.findByLabelText("expand");

    fireEvent.click(expandButton);

    expect(expandButton).toBeInTheDocument();
  });
});
