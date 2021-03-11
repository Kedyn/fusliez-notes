import "regenerator-runtime/runtime";

import App from "../components/App";
import { I18nextProvider } from "react-i18next";
import React from "react";
import i18n from "../i18n";
import { render } from "@testing-library/react";

describe("App", () => {
  test("renders App component", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    );
  });
});
