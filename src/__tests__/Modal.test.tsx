import * as React from "react";

import { render, screen } from "@testing-library/react";

import DefaultComponentWrapper from "./DefaultComponentWrapper";
import Modal from "components/common/Modal";
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
          <Modal
            show={true}
            onClose={onClickMock}
            title="testing"
            footer={<div>test footer</div>}
          />
        </DefaultComponentWrapper>
      );
    });

    test("onClose should have been called once on CloseButton click", () => {
      const closeButton = screen.getByRole("button");
      userEvent.click(closeButton);
      expect(onClickMock).toHaveBeenCalledTimes(1);
    });

    test("onClose should have been called once on click", () => {
      const modal = screen.getByTestId("testing-modal");
      userEvent.click(modal);
      expect(onClickMock).toHaveBeenCalledTimes(1);
    });
  });

  describe("show === false", () => {
    beforeEach(async () => {
      registerFaIcons();
      onClickMock.mockReset();
      await render(
        <DefaultComponentWrapper testStore={store}>
          <Modal
            show={false}
            onClose={onClickMock}
            title="testing"
            footer={<div>test footer</div>}
          />
        </DefaultComponentWrapper>
      );
    });

    test("onClose should have been called once on click", async () => {
      const modal = await screen.queryByTestId("testing-modal");
      expect(modal).toBeNull();
    });
  });
});
