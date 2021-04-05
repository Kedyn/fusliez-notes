import * as React from "react";

import DefaultComponentWrapper from "../DefaultComponentWrapper";
import Navbar from "components/Navbar";
import registerFaIcons from "utils/registerFaIcons";
import { render } from "@testing-library/react";
import store from "store";
import userEvent from "@testing-library/user-event";

describe("Navbar tests", () => {
  const onChangeMock = jest.fn();
  const setDrawerMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    registerFaIcons();
  });

  test("clicking the button should change the view if the title is NOT menu.menu", () => {
    const { getByLabelText } = render(
      <DefaultComponentWrapper testStore={store}>
        <Navbar
          activeView="menu.players"
          onChangeActiveView={onChangeMock}
          setIsDrawerOpen={setDrawerMock}
        />
      </DefaultComponentWrapper>
    );

    const button = getByLabelText("navitem-menu.notes");
    userEvent.click(button);
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith("menu.notes");
  });

  test("clicking the button should open the drawer if the title is menu.menu", () => {
    const { getByLabelText } = render(
      <DefaultComponentWrapper testStore={store}>
        <Navbar
          activeView="menu.players"
          onChangeActiveView={onChangeMock}
          setIsDrawerOpen={setDrawerMock}
        />
      </DefaultComponentWrapper>
    );

    const button = getByLabelText("navitem-menu.menu");
    userEvent.click(button);
    expect(setDrawerMock).toHaveBeenCalledTimes(1);
    expect(setDrawerMock).toHaveBeenCalledWith(true);
  });
});
