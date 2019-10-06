import React from "react";
import renderer from "react-test-renderer";

import PromotionScreen from "..";

describe("PromotionScreen", () => {
  it("renders the PromotionScreen default component", () => {
    const actual = renderer.create(<PromotionScreen />).toJSON();

    expect(actual).toMatchSnapshot();
  });

  it("renders the PromotionScreen component when win the prize", () => {
    const actual = renderer.create(<PromotionScreen screen="win" />).toJSON();

    expect(actual).toMatchSnapshot();
  });

  it("renders the PromotionScreen component when lose the prize", () => {
    const actual = renderer.create(<PromotionScreen screen="lose" />).toJSON();

    expect(actual).toMatchSnapshot();
  });
});
