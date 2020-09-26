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

const requestWakeLock = async () => {
  if ("wakeLock" in navigator) {
    await navigator.wakeLock.request("screen");
  }
};

requestWakeLock();
