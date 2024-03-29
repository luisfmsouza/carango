import React from "react";
import renderer from "react-test-renderer";

import Header from "../Header";

describe("Header", () => {
  it("renders the header component", () => {
    const actual = renderer.create(<Header />).toJSON();

    expect(actual).toMatchSnapshot();
  });
});
