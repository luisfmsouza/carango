import React from "react";
import renderer from "react-test-renderer";

import Form from "../Form";

describe("Form", () => {
  it("renders the Form component", () => {
    const actual = renderer.create(<Form />).toJSON();

    expect(actual).toMatchSnapshot();
  });
});
