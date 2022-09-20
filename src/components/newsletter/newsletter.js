import { useState } from "react";
import { useFormspark } from "@formspark/use-formspark";

import UseInput, { ValidateInput } from "../../hooks/UseInput";

import { ReactComponent as Send } from "../../assets/Send icon.svg";

const FORMSPARK_FORM_ID = "eFuAEx7K";

const Newsletter = () => {
  const [submit, submitting] = useFormspark({ formId: FORMSPARK_FORM_ID });
  const { formData, handleChange, resetFormFields } = UseInput({
    email: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { newErrors, valid } = ValidateInput(formData);

    if (!valid) return setError(newErrors.email);

    await submit(formData);

    resetFormFields({ email: "" });
    setError("");

    alert("Form submitted");
  };

  return (
    <section
      aria-label="newsletter"
      className="max-w-[712px] py-[50px] sm:flex sm:flex-col sm:items-center sm:mx-auto sm:text-center md:py-10 "
    >
      <h2 className="title ">Be The First</h2>
      <p className="text-[19px] md:text-[23px]">
        Join our newsletter and be the first to know about new and exciting
        deals
      </p>
      <form className="mt-16" onSubmit={handleSubmit} method="POST">
        <div className="input px-[30px] flex">
          <input
            type="text"
            name="email"
            placeholder="Enter your Email"
            className="text-[27px] active:bg-transparent"
            value={formData.email}
            onChange={handleChange}
          />
          <button
            className="border-none outline-none h-full w-[50px] bg-transparent grid place-items-center"
            type="submit"
            disabled={submitting}
          >
            <Send />
          </button>
        </div>
        {error && <span className="text-gold text-xs">{error}</span>}
      </form>
    </section>
  );
};

export default Newsletter;
