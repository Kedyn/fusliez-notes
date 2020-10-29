import { faSort, faUsers } from "@fortawesome/free-solid-svg-icons";

import ContextWrapper from "context";
import Layout from "./Layout";
import React from "react";
import { faCompactDisc } from "@fortawesome/free-solid-svg-icons/faCompactDisc";
import { faEdit } from "@fortawesome/free-solid-svg-icons/faEdit";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons/faEllipsisH";
import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart";
import { faMap } from "@fortawesome/free-solid-svg-icons/faMap";
import { faMinus } from "@fortawesome/free-solid-svg-icons/faMinus";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";
import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons/faUserAstronaut";
import { library } from "@fortawesome/fontawesome-svg-core";

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
  faUsers
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
