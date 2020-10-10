import Layout from "./Layout";
import ContextWrapper from "context";
import React from "react";

export default function App(): JSX.Element {
  return (
    <React.Suspense fallback="Loading...">
      <ContextWrapper>
        <Layout />
      </ContextWrapper>
    </React.Suspense>
  );
}
