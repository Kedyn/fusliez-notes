import App from "../components/App";
import { I18nextProvider } from "react-i18next";
import { NAMESPACE } from "constants/main";
import React from "react";
import i18n from "../i18n";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("App tests", () => {
  test("disclaimer should be on the page", async () => {
    const { getByText } = await render(
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    );

    const disclaimer = await getByText(
      /Please know that we utilize Google Analytics/g
    );

    expect(disclaimer).toBeInTheDocument();
  });

  test("disclaimer should NOT be on the page", async () => {
    const { getByRole } = await render(
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    );

    const understandButton = await getByRole("button", {
      name: /main.understand/i,
    });
    userEvent.click(understandButton);

    expect(localStorage.setItem).toHaveBeenLastCalledWith(
      `${NAMESPACE}disclaimer`,
      "Understood"
    );
  });
});
