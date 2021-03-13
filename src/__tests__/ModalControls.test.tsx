import "regenerator-runtime/runtime";
import "@testing-library/jest-dom/extend-expect";

import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";

import DefaultComponentWrapper from "./DefaultComponentWrapper";
import ModalControls from "../components/ModalControls";
import React from "react";
import registerFaIcons from "../utils/registerFaIcons";
import store from "store";
import userEvent from "@testing-library/user-event";

describe("ModalControls component tests", () => {
  beforeEach(async () => {
    registerFaIcons();
    await render(
      <DefaultComponentWrapper testStore={store}>
        <ModalControls />
      </DefaultComponentWrapper>
    );
  });

  test("should render ModalControls component", async () => {
    const component = await screen.getByTestId("modal-controls");
    expect(component).toBeInTheDocument();
  });

  test('should render button for "Settings"', async () => {
    const element = await waitFor(() =>
      screen.getByRole("button", { name: "menu.settings" })
    );

    expect(element).toBeInTheDocument();
  });

  test("should open Settings modal when button is clicked", async () => {
    const button = await waitFor(() =>
      screen.getByRole("button", { name: "menu.settings" })
    );

    expect(button).toBeInTheDocument();

    userEvent.click(button);

    const settingsModal = await waitFor(() =>
      screen.getByText(/settings.title/)
    );

    expect(settingsModal).toBeInTheDocument();
  });

  test("should close Settings modal when button is clicked", async () => {
    const button = await waitFor(() =>
      screen.getByRole("button", { name: "menu.settings" })
    );

    expect(button).toBeInTheDocument();

    userEvent.click(button);

    const settingsModal = await waitFor(() =>
      screen.getByText(/settings.title/)
    );
    expect(settingsModal).toBeInTheDocument();

    waitForElementToBeRemoved(screen.queryByText(/settings.title/));

    const closeButton = screen.getByLabelText(/close/i);
    const mockFn = jest.fn(Object.values(closeButton)[0].memoizedProps.onClick);

    userEvent.click(closeButton);
    mockFn();
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test("should open About modal when button is clicked", async () => {
    const button = await waitFor(() =>
      screen.getByRole("button", { name: "menu.about" })
    );

    expect(button).toBeInTheDocument();

    userEvent.click(button);

    const aboutModal = await waitFor(() => screen.getByText(/fusliez notes v/));
    expect(aboutModal).toBeInTheDocument();
  });

  test("should close About modal when button is clicked", async () => {
    const button = await waitFor(() =>
      screen.getByRole("button", { name: "menu.about" })
    );

    expect(button).toBeInTheDocument();

    userEvent.click(button);

    const aboutModal = await waitFor(() => screen.getByText(/fusliez notes v/));
    expect(aboutModal).toBeInTheDocument();

    waitForElementToBeRemoved(screen.queryByText(/fusliez notes v/));

    const closeButton = screen.getByLabelText(/close/i);
    const mockFn = jest.fn(Object.values(closeButton)[0].memoizedProps.onClick);

    userEvent.click(closeButton);
    mockFn();
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test("should open Changelog modal when button is clicked", async () => {
    const button = await waitFor(() =>
      screen.getByRole("button", { name: "menu.changelog" })
    );

    expect(button).toBeInTheDocument();

    userEvent.click(button);

    const changelogModal = await waitFor(() => screen.getByText(/Highlights/));
    expect(changelogModal).toBeInTheDocument();
  });

  test("should close Changelog modal when button is clicked", async () => {
    const button = await waitFor(() =>
      screen.getByRole("button", { name: "menu.changelog" })
    );

    expect(button).toBeInTheDocument();

    userEvent.click(button);

    const changelogModal = await waitFor(() => screen.getByText(/Highlights/));
    expect(changelogModal).toBeInTheDocument();

    waitForElementToBeRemoved(screen.queryByText(/Highlights/));

    const closeButton = screen.getByLabelText(/close/i);
    const mockFn = jest.fn(Object.values(closeButton)[0].memoizedProps.onClick);

    userEvent.click(closeButton);
    mockFn();
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
