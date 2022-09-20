import { ValidateInput } from "./UseInput";

test("validates form input", () => {
  const values = {
    email: "khadija",
    phoneNumber: "",
    fullName: "",
    message: "",
  };
  expect(ValidateInput(values)).toEqual({
    newErrors: {
      email: "Email is incorrect",
      fullName: "This field is required",
      message: "Message is empty",
      phoneNumber: "Phone Number is required",
    },
    valid: false,
  });
});
