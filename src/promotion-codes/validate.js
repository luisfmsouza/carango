import { compose } from "./utils";

const hasNineDigits = number => /^[0-9]{9}$/.test(number);

const hasTriplicatedDigits = number => /([0-9]).*?\1.*?\1/.test(number);

const multiply = number =>
  number
    .toString()
    .split("")
    .map((digit, index) => digit * (9 - index));

const sum = array =>
  array.reduce((accumulator, currentValue) => accumulator + currentValue);

const divideByEleven = number => number / 11;

const hasNoDecimalPlaces = number => number === Math.trunc(number);

export default code => {
  if (!hasNineDigits(code)) {
    return false;
  }

  if (hasTriplicatedDigits(code)) {
    return false;
  }

  return compose(
    hasNoDecimalPlaces,
    divideByEleven,
    sum,
    multiply
  )(code);
};
