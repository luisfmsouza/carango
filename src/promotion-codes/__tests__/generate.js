import generate from "../generate";

describe("promotion codes", () => {
  describe("when given a code", () => {
    it("checks if has 9 digits", () => {
      const actual = generate();

      const eightDigits = 99999999;
      const tenDigits = 1000000000;

      expect(actual).toBeGreaterThan(eightDigits);
      expect(actual).toBeLessThan(tenDigits);
    });

    it("checks if it is a number", () => {
      const actual = typeof generate();

      const expected = "number";

      expect(actual).toBe(expected);
    });
  });
});
