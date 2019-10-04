import generate from "./generate";
import validate from "./validate";

export default (amount = 1000) => {
  const generatedCodes = [];

  while (amount) {
    const code = generate();

    if (validate(code)) {
      generatedCodes.push(code);
      amount--;
    }
  }

  return generatedCodes;
};
