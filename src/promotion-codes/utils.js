/* Author of compose: Eric Elliot
 * reference link: https://medium.com/javascript-scene/curry-and-function-composition-2c208d774983
 */

export const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);

export const trace = label => value => {
  console.log(`${label}: ${value}`);
  return value;
};
