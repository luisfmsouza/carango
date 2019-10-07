import React, { useState } from "react";
import axios from "axios";
import set from "lodash/fp/set";
import isAlpha from "validator/lib/isAlpha";
import isEmail from "validator/lib/isEmail";
import isMobilePhone from "validator/lib/isMobilePhone";
import isNumeric from "validator/lib/isNumeric";

import PromotionScreen from "./PromotionScreen";
import isValidVoucherCode from "./promotion-codes/validate";
import { hasFormError, hasFormData } from "./selector";

const initialState = {
  firstName: { value: "", hasError: false, type: "string" },
  surname: { value: "", hasError: false, type: "string" },
  email: { value: "", hasError: false, type: "email" },
  phoneNumber: { value: "", hasError: false, type: "phone" },
  voucherCode: { value: "", hasError: false, type: "code" },
  acceptPrivacy: { value: false, hasError: false, type: "checkbox" }
};

export default WrappedComponent => {
  const [formState, setFormState] = useState(initialState);
  const [screen, setScreen] = useState("");

  const handleInputChange = event => {
    const input = event.target;
    const { type } = formState[input.id];
    const value = type === "checkbox" ? input.checked : input.value;
    const newState = set(`${input.id}.value`, value, formState);

    setFormState(newState);
  };

  const handleInputBlur = event => {
    const input = event.target;
    const { type, value } = formState[input.id];
    let hasError = false;

    if (type === "string") {
      hasError = !isAlpha(value) || value.length < 2;
    } else if (type === "email") {
      hasError = !isEmail(value);
    } else if (type === "phone") {
      hasError = !isMobilePhone(value, ["nl-NL", "pt-BR"]);
    } else if (type === "code") {
      hasError = !isNumeric(value) || !isValidVoucherCode(value);
    }

    const newState = set(`${input.id}.hasError`, hasError, formState);

    setFormState(newState);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!hasFormError(formState) && hasFormData(formState)) {
      const instance = axios.create({
        baseURL: "https://some-domain.com/api/",
        timeout: 1000,
        headers: { "Content-Type": "application/json" }
      });

      instance
        .post("http://localhost:3004/form", {
          firstName: formState.firstName.value,
          surname: formState.surname.value,
          email: formState.email.value,
          phoneNumber: formState.phoneNumber.value,
          voucherCode: formState.voucherCode.value,
          acceptPrivacy: formState.acceptPrivacy.value
        })
        .then(function(response) {
          // Returns `true` ("You win") once every 10 executions
          if (Math.trunc(Math.random() * 10) === 1) {
            setScreen("win");
          } else {
            setScreen("lose");
          }
        })
        .catch(function(error) {
          setScreen("lose");
        });
    }
  };

  const shouldBlockFormSubmission =
    hasFormError(formState) || !hasFormData(formState);

  return (
    <PromotionScreen
      screen={screen}
      formState={formState}
      shouldBlockFormSubmission={shouldBlockFormSubmission}
      handleInputChange={handleInputChange}
      handleInputBlur={handleInputBlur}
      handleSubmit={handleSubmit}
    />
  );
};
