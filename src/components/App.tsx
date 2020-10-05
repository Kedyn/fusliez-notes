import Content from "./Content";
import ContextWrapper from "context";
import React from "react";

export default function App(): JSX.Element {
  return (
    <React.Suspense fallback="Loading...">
      <ContextWrapper>
        <Content />
      </ContextWrapper>
    </React.Suspense>
  );
}
