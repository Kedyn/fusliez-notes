import Layout from "./Layout";
import ContextWrapper from "context";
import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
// TODO: deep imports aren't necessary.
// use normal imports when proper tree shaking is added
import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart";
import { faMinus } from "@fortawesome/free-solid-svg-icons/faMinus";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";
import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons/faUserAstronaut";
import { faEdit } from "@fortawesome/free-solid-svg-icons/faEdit";
import { faCompactDisc } from "@fortawesome/free-solid-svg-icons/faCompactDisc";
import { faMap } from "@fortawesome/free-solid-svg-icons/faMap";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons/faEllipsisH";

library.add(
  faHeart,
  faMinus,
  faPlus,
  faTimes,
  faUserAstronaut,
  faEdit,
  faCompactDisc,
  faMap,
  faEllipsisH
);

export default function App(): JSX.Element {
  return (
    <React.Suspense fallback="Loading...">
      <ContextWrapper>
        <Layout />
      </ContextWrapper>
    </React.Suspense>
  );
}
