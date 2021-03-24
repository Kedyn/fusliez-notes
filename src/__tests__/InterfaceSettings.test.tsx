import { fireEvent, render } from "@testing-library/react";

import { I18nextProvider } from "react-i18next";
import InterfaceSettings from "../components/InterfaceSettings";
import React from "react";
import i18n from "../i18n";

describe("InterfaceSettings tests", () => {
  beforeAll(() => {
    localStorage.setItem("i18nextLng", "en-US");
  });

  test("should simulate language change", async () => {
    const { getByTestId } = await render(
      <I18nextProvider i18n={i18n}>
        <InterfaceSettings />
      </I18nextProvider>
    );

    const languageOptions = getByTestId("language-options");
    fireEvent.change(languageOptions, { target: { value: "ja-JP" } });

    expect(localStorage.setItem).toHaveBeenLastCalledWith(
      "i18nextLng",
      "ja-JP"
    );
  });
});
