import { useState } from "react";

export const ValidateInput = (initialValue) => {
  let newErrors = {};
  let valid = true;

  if (initialValue.hasOwnProperty("email") && !initialValue.email) {
    newErrors.email = "Email is required";
    valid = false;
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(initialValue.email)
  ) {
    newErrors.email = "Email is incorrect";
    valid = false;
  }
  if (initialValue.hasOwnProperty("phoneNumber") && !initialValue.phoneNumber) {
    newErrors.phoneNumber = "Phone Number is required";
    valid = false;
  }
  if (initialValue.hasOwnProperty("fullName") && !initialValue.fullName) {
    newErrors.fullName = "This field is required";
    valid = false;
  }
  if (initialValue.hasOwnProperty("message") && !initialValue.message) {
    newErrors.message = "Message is empty";
    valid = false;
  }

  return { newErrors, valid };
};

const UseInput = (initialValue) => {
  const [formData, setFormData] = useState(initialValue);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  const resetFormFields = (initialValue) => {
    setFormData(initialValue);
  };

  return { formData, handleChange, resetFormFields };
};
export default UseInput;
