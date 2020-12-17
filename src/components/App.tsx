import { JssProvider, ThemeProvider } from "react-jss";

import { DEFAULT_THEME_DATA } from "constants/theme";
import Layout from "./Layout";
import { Provider } from "react-redux";
import React from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { faCompactDisc } from "@fortawesome/free-solid-svg-icons/faCompactDisc";
import { faEdit } from "@fortawesome/free-solid-svg-icons/faEdit";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons/faEllipsisH";
import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart";
import { faMap } from "@fortawesome/free-solid-svg-icons/faMap";
import { faMinus } from "@fortawesome/free-solid-svg-icons/faMinus";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { faSort } from "@fortawesome/free-solid-svg-icons/faSort";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";
import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons/faUserAstronaut";
import { faUsers } from "@fortawesome/free-solid-svg-icons/faUsers";
import jssSetUp from "utils/jssSetUp";
import { library } from "@fortawesome/fontawesome-svg-core";
import store from "store";

// TODO: deep imports aren't necessary.
// use normal imports when proper tree shaking is added
library.add(
  faHeart,
  faMinus,
  faPlus,
  faTimes,
  faUserAstronaut,
  faEdit,
  faCompactDisc,
  faMap,
  faEllipsisH,
  faSort,
  faUsers,
  faArrowRight,
  faArrowLeft
);

export default function App(): JSX.Element {
  return (
    <>
      <Provider store={store}>
        <JssProvider registry={jssSetUp()}>
          <ThemeProvider theme={DEFAULT_THEME_DATA}>
            <React.Suspense fallback="Loading...">
              <Layout />
            </React.Suspense>
          </ThemeProvider>
        </JssProvider>
      </Provider>
    </>
  );
}
