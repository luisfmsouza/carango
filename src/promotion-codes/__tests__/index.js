import generateCodes from "..";

describe("promotion codes", () => {
  describe("when given an amount", () => {
    it("generates amount of codes", () => {
      const actual = generateCodes(2);

      const expected = 2;

      expect(actual.length).toEqual(expected);
    });
  });
});
