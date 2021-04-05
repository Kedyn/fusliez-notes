import Layer from "utils/AUMT/Layer";

describe("AUMT/Layer tests", () => {
  const layer = new Layer();

  test("setVisible(false) should set this.visible to false", () => {
    layer.setVisible(false);
    expect(layer.getVisible()).toBeFalsy();
  });
});
