import { useState } from "react";
import UseInput, { ValidateInput } from "../../hooks/UseInput";

import { ReactComponent as Send } from "../../assets/Send icon.svg";

const Newsletter = () => {
  const { formData, handleChange, resetFormFields } = UseInput({
    email: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const { newErrors, valid } = ValidateInput(formData);

    if (!valid) return setError(newErrors.email);

    resetFormFields({ email: "" });
    setError("");
  };

  return (
    <section
      aria-label="newsletter"
      className="max-w-[712px] text-center md:flex md:flex-col md:items-center md:mx-auto"
    >
      <h2 className="title ">Be The First</h2>
      <p className="text-[19px] md:text-[23px]">
        Join our newsletter and be the first to know about new and exciting
        deals
      </p>
      <form className="mt-16" onSubmit={handleSubmit}>
        <div className="input flex max-w-[450px]">
          <input
            type="text"
            name="email"
            placeholder="Enter your Email"
            className="active:bg-transparent"
            value={formData.email}
            onChange={handleChange}
          />
          <button className="border-none outline-none h-full w-[50px] bg-transparent grid place-items-center">
            <Send />
          </button>
        </div>
        {error && <span className="text-gold text-xs">{error}</span>}
      </form>
    </section>
  );
};

export default Newsletter;
