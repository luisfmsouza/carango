import { hasFormError, hasFormData } from "..";

describe("hasFormError()", () => {
  it("returns true when there is any error on the form", () => {
    const state = {
      firstName: { value: "", hasError: false, type: "string" },
      surname: { value: "", hasError: false, type: "string" },
      email: { value: "", hasError: false, type: "email" },
      phoneNumber: { value: "", hasError: false, type: "phone" },
      voucherCode: { value: "", hasError: false, type: "code" },
      acceptPrivacy: { value: false, hasError: true, type: "checkbox" }
    };

    const actual = hasFormError(state);

    const expected = true;

    expect(actual).toBe(expected);
  });

  it("returns false when there is no error on the form", () => {
    const state = {
      firstName: { value: "", hasError: false, type: "string" },
      surname: { value: "", hasError: false, type: "string" },
      email: { value: "", hasError: false, type: "email" },
      phoneNumber: { value: "", hasError: false, type: "phone" },
      voucherCode: { value: "", hasError: false, type: "code" },
      acceptPrivacy: { value: false, hasError: false, type: "checkbox" }
    };

    const actual = hasFormError(state);

    const expected = false;

    expect(actual).toBe(expected);
  });
});

describe("hasFormData()", () => {
  it("returns true when the form is filled", () => {
    const state = {
      firstName: { value: "Luis", hasError: false, type: "string" },
      surname: { value: "Souza", hasError: false, type: "string" },
      email: { value: "luisfmsouza@gmail.com", hasError: false, type: "email" },
      phoneNumber: { value: "+5519992166464", hasError: false, type: "phone" },
      voucherCode: { value: "123456789", hasError: false, type: "code" },
      acceptPrivacy: { value: true, hasError: true, type: "checkbox" }
    };

    const actual = hasFormData(state);

    const expected = true;

    expect(actual).toBe(expected);
  });

  it("returns false when the form is missing data", () => {
    const state = {
      firstName: { value: "", hasError: false, type: "string" },
      surname: { value: "", hasError: false, type: "string" },
      email: { value: "", hasError: false, type: "email" },
      phoneNumber: { value: "", hasError: false, type: "phone" },
      voucherCode: { value: "", hasError: false, type: "code" },
      acceptPrivacy: { value: false, hasError: false, type: "checkbox" }
    };

    const actual = hasFormData(state);

    const expected = false;

    expect(actual).toBe(expected);
  });
});
