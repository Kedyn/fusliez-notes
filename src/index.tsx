import App from "components/App";
import { DataProvider } from "context";
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <DataProvider>
    <App />
  </DataProvider>,
  document.getElementById("root")
);
