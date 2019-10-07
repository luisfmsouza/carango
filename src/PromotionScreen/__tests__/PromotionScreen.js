import React from "react";
import renderer from "react-test-renderer";

import PromotionScreen from "..";

describe("PromotionScreen", () => {
  it("renders default component", () => {
    const initialState = {
      firstName: { value: "", hasError: false, type: "string" },
      surname: { value: "", hasError: false, type: "string" },
      email: { value: "", hasError: false, type: "email" },
      phoneNumber: { value: "", hasError: false, type: "phone" },
      voucherCode: { value: "", hasError: false, type: "code" },
      acceptPrivacy: { value: false, hasError: false, type: "checkbox" }
    };

    const actual = renderer
      .create(
        <PromotionScreen
          formState={initialState}
          shouldBlockFormSubmission={false}
        />
      )
      .toJSON();

    expect(actual).toMatchSnapshot();
  });

  it("renders component when win the prize", () => {
    const actual = renderer.create(<PromotionScreen screen="win" />).toJSON();

    expect(actual).toMatchSnapshot();
  });

  it("renders component when lose the prize", () => {
    const actual = renderer.create(<PromotionScreen screen="lose" />).toJSON();

    expect(actual).toMatchSnapshot();
  });
});
