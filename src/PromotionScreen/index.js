import React from "react";

import Win from "./Win";
import Lose from "./Lose";
import Default from "./Default";

const PromotionScreen = ({
  screen,
  formState,
  shouldBlockFormSubmission,
  handleInputChange,
  handleInputBlur,
  handleSubmit
}) => {
  if (screen === "win") return <Win />;
  if (screen === "lose") return <Lose />;

  return (
    <Default
      formState={formState}
      shouldBlockFormSubmission={shouldBlockFormSubmission}
      handleInputChange={handleInputChange}
      handleInputBlur={handleInputBlur}
      handleSubmit={handleSubmit}
    />
  );
};

export default PromotionScreen;
