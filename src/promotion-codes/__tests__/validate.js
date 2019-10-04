import validate, { multiply, sum } from "../validate";

describe("promotion codes", () => {
  describe("when given a valid code", () => {
    it("returns true ", () => {
      const actual = validate(613884922);

      const expected = true;

      expect(actual).toBe(expected);
    });
  });

  describe("when does not have 9 digits", () => {
    it("returns false", () => {
      const actual = validate(70406997);

      const expected = false;

      expect(actual).toBe(expected);
    });
  });

  describe("when there is more than 2 equal digits", () => {
    it("returns false", () => {
      const actual = validate(131888331);

      const expected = false;

      expect(actual).toBe(expected);
    });
  });

  describe("when the division by 11 is not a whole number", () => {
    it("returns false", () => {
      const actual = validate(538820102);

      const expected = false;

      expect(actual).toBe(expected);
    });
  });
});
