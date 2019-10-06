import React from "react";

import Win from "./Win";
import Lose from "./Lose";
import Default from "./Default";

export default ({ screen }) => {
  if (screen === "win") return <Win />;
  if (screen === "lose") return <Lose />;

  return <Default />;
};
