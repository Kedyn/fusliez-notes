import * as React from "react";

import { render, screen } from "@testing-library/react";

import DefaultComponentWrapper from "./DefaultComponentWrapper";
import { IView } from "utils/types/interface";
import SlideDrawer from "components/SlideDrawer";
import registerFaIcons from "utils/registerFaIcons";
import store from "store";
import userEvent from "@testing-library/user-event";

// const Sections = React.lazy(
//   () => import(/* webpackChunkName: "sections" */ "components/Sections")
// );
// const Notepad = React.lazy(
//   () => import(/* webpackChunkName: "notepad" */ "components/Notepad")
// );
// const ScoresPanel = React.lazy(
//   () => import(/* webpackChunkName: "scores" */ "components/ScoresPanel")
// );
// const MainControls = React.lazy(
//   () => import(/* webpackChunkName: "maincontrols" */ "components/MainControls")
// );
// const Maps = React.lazy(
//   () => import(/* webpackChunkName: "maps" */ "components/Maps")
// );
// const Settings = React.lazy(
//   () => import(/* webpackChunkName: "settings" */ "components/Settings")
// );
// const About = React.lazy(
//   () => import(/* webpackChunkName: "about" */ "components/About")
// );
// const Changelog = React.lazy(
//   () => import(/* webpackChunkName: "changelog" */ "components/Changelog")
// );

describe("SlideDrawer tests", () => {
  const setActiveViewMock = jest.fn();
  const setDrawerMock = jest.fn();
  const views: Array<IView> = [
    {
      title: "menu.players",
      content: "<Sections />",
      minor: false,
    },
    {
      title: "menu.notes",
      content: "<Notepad />",
      minor: false,
    },
    {
      title: "menu.scores",
      content: `<div className={""}>
          <ScoresPanel />
          <MainControls />
        </div>`,
      minor: false,
    },
    {
      title: "menu.maps",
      content: "<Maps />",
      minor: false,
    },
    {
      title: "menu.settings",
      content: "<Settings />",
      minor: true,
    },
    {
      title: "menu.about",
      content: "<About />",
      minor: true,
    },
    {
      title: "menu.changelog",
      content: "<Changelog />",
      minor: true,
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
    registerFaIcons();
    render(
      <DefaultComponentWrapper testStore={store}>
        <SlideDrawer
          isDrawerOpen={true}
          setIsDrawerOpen={setDrawerMock}
          views={views}
          setActiveView={setActiveViewMock}
        />
      </DefaultComponentWrapper>
    );
  });

  test("clicking the button should change the view if the title is NOT menu.menu", () => {
    const closeButton = screen.getByLabelText(/close/i);
    userEvent.click(closeButton);
    expect(setDrawerMock).toHaveBeenCalledTimes(1);
    expect(setDrawerMock).toHaveBeenCalledWith(false);
  });

  test("clicking a view item should change the view if it is different than current", () => {
    const viewTab = screen.getByText("menu.notes");
    userEvent.click(viewTab);
    expect(setActiveViewMock).toHaveBeenCalledTimes(1);
    expect(setActiveViewMock).toHaveBeenCalledWith(views[1]);
    expect(setDrawerMock).toHaveBeenCalledTimes(1);
    expect(setDrawerMock).toHaveBeenCalledWith(false);
  });
});
