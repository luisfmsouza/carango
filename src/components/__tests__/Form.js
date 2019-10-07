import React from "react";
import renderer from "react-test-renderer";
import flow from "lodash/fp/flow";
import set from "lodash/fp/set";

import Form from "../Form";

describe("Form", () => {
  const initialState = {
    firstName: { value: "", hasError: false, type: "string" },
    surname: { value: "", hasError: false, type: "string" },
    email: { value: "", hasError: false, type: "email" },
    phoneNumber: { value: "", hasError: false, type: "phone" },
    voucherCode: { value: "", hasError: false, type: "code" },
    acceptPrivacy: { value: false, hasError: false, type: "checkbox" }
  };

  it("renders component with default state", () => {
    const actual = renderer
      .create(
        <Form formState={initialState} shouldBlockFormSubmission={false} />
      )
      .toJSON();

    expect(actual).toMatchSnapshot();
  });

  it("renders component with error message", () => {
    const errorState = flow(
      set("firstName.hasError", true),
      set("surname.hasError", true),
      set("email.hasError", true),
      set("phoneNumber.hasError", true),
      set("voucherCode.hasError", true),
      set("acceptPrivacy.hasError", true)
    )(initialState);
    const actual = renderer
      .create(<Form formState={errorState} shouldBlockFormSubmission={true} />)
      .toJSON();

    expect(actual).toMatchSnapshot();
  });

  it("renders component with disabled submit button", () => {
    const actual = renderer
      .create(
        <Form formState={initialState} shouldBlockFormSubmission={true} />
      )
      .toJSON();

    expect(actual).toMatchSnapshot();
  });
});
