import * as React from "react";

import { render, screen } from "@testing-library/react";

import DefaultComponentWrapper from "./DefaultComponentWrapper";
import Maps from "components/Maps";
import registerFaIcons from "utils/registerFaIcons";
import store from "store";
import userEvent from "@testing-library/user-event";

describe("", () => {
  const onClickMock = jest.fn();

  describe("show === true", () => {
    beforeEach(async () => {
      registerFaIcons();
      onClickMock.mockReset();
      await render(
        <DefaultComponentWrapper testStore={store}>
          <Maps />
        </DefaultComponentWrapper>
      );
    });

    test("onClick Mira HQ button should set current map to Mira HQ", () => {
      const miraHQButton = screen.getByRole("button", { name: "Mira HQ" });
      userEvent.click(miraHQButton);
    });

    test("onClick Polus button should set current map to Polus", () => {
      const polusButton = screen.getByRole("button", { name: "Polus" });
      userEvent.click(polusButton);
    });

    test("onClick The Skeld button should set current map to The Skeld", () => {
      const skeldButton = screen.getByRole("button", { name: "The Skeld" });
      userEvent.click(skeldButton);
    });
  });
});
