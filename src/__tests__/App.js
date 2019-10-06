import React from "react";
import renderer from "react-test-renderer";

import App from "../App";

describe("App", () => {
  it("renders the App component", () => {
    const actual = renderer.create(<App />).toJSON();

    expect(actual).toMatchSnapshot();
  });
});
