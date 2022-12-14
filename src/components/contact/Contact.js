import { Fragment, useState } from "react";
import UseInput, { ValidateInput } from "../../hooks/UseInput";

import { ReactComponent as SendStamp } from "../../assets/Send Button.svg";

import "./Contact.scss";
import { useFormspark } from "@formspark/use-formspark";

const initialValue = {
  email: "",
  fullName: "",
  phoneNumber: "",
  message: "",
};

const inputs = [
  { type: "text", name: "fullName", placeholder: "Enter your full name" },
  { type: "text", name: "email", placeholder: "Enter your e-mail address" },
  { type: "text", name: "phoneNumber", placeholder: "Enter your phone number" },
  { type: "textarea", name: "message", placeholder: "Enter your message" },
];

const FORMSPARK_FORM_ID = "X3j6PI8n";

const Contact = () => {
  const { formData, handleChange, resetFormFields } = UseInput(initialValue);
  const [errors, setErrors] = useState({});
  const [submit, submitting] = useFormspark({ formId: FORMSPARK_FORM_ID });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { newErrors, valid } = ValidateInput(formData);

    if (!valid) return setErrors(newErrors);

    await submit(formData);

    resetFormFields(initialValue);
    setErrors({});

    alert("Form submitted");
  };

  return (
    <section
      aria-label="contact us"
      className="md:flex md:flex-row md:flex-wrap "
    >
      <div className="contact-us__image max-w-[390px] md:order-4 md:flex-1 mx-auto md:mx-0 md:self-center lg:mx-auto lg:max-w-[600px]">
        <img
          src="https://images.pexels.com/photos/7175331/pexels-photo-7175331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="object-cover"
          alt="hero section bath bomb feature"
        />
      </div>

      <h2 className="title leading-[62px] md:leading-[84px] md:order-1 md:basis-full">
        Nice to meet you!
      </h2>
      <p className="mt-5 md:order-2 md:basis-full">
        Fill the form and we will reach you out shortly,
      </p>
      <form
        method="POST"
        onSubmit={handleSubmit}
        className="space-y-[37px] mt-[70px] md:order-3 lg:flex-1"
      >
        {inputs.map((input, index) => {
          const { type, name, placeholder } = input;
          if (type === "textarea") {
            return (
              <Fragment key={index}>
                <div className="input h-fit max-w-[520px]">
                  <textarea
                    rows={4}
                    name={name}
                    placeholder={placeholder}
                    onChange={handleChange}
                  ></textarea>
                </div>
                {errors[name] && (
                  <span role="alert" className="mt-0 text-gold text-xs block">
                    {errors[name]}
                  </span>
                )}
              </Fragment>
            );
          }
          return (
            <Fragment key={index}>
              <div className="input max-w-[520px]">
                <input {...input} onChange={handleChange} />
              </div>
              {errors[name] && (
                <span role="alert" className="text-gold text-xs">
                  {errors[name]}
                </span>
              )}
            </Fragment>
          );
        })}
        {/* <div className="flex items-center">
          <input type="checkbox" name="terms" id="TnC" />
          <label for="TnC" className="text-[#9A9A9A] text-lg ml-3">
            I agree to the{" "}
            <span className="text-white">terms and condition</span>
          </label>
        </div> */}
        <button
          className="outline-none border-none bg-transparent"
          disabled={submitting}
        >
          <SendStamp />
        </button>
      </form>
    </section>
  );
};

export default Contact;
