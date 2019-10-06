import React from "react";
import renderer from "react-test-renderer";

import Form from "../Form";

describe.only("Form", () => {
  it("renders the Form component", () => {
    const actual = renderer.create(<Form />).toJSON();

    expect(actual).toMatchSnapshot();
  });

  it("renders the Form component when has error", () => {
    const actual = renderer.create(<Form hasError={true} />).toJSON();

    expect(actual).toMatchSnapshot();
  });
});
