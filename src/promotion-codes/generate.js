import { compose } from "./utils";

export default () => {
  const getRandom = () => Math.random();
  const convertToNineDigits = number => number * 1000000000;

  return compose(
    Math.trunc,
    convertToNineDigits
  )(getRandom());
};
