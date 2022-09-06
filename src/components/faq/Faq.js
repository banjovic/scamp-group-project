import { useState } from "react";

import "./faq.scss";

const Faq = () => {
  const [isActive, setIsActive] = useState("");

  const questions = [
    {
      question: "Is the services refundable?",
      answer: "Yes, but refund is only valid for 72 hours",
    },
    {
      question: "Can I pay using Cryptcurrency?",
      answer:
        "Yes, You can pay using cryptocurrencies, We accept only BNB from smartchain",
    },
    {
      question: "How long does it take for curly hairs?",
      answer: "Yes, but refund is only valid for 72 hours",
    },
    {
      question: "Do you do International deliveries?",
      answer: "Yes, but refund is only valid for 72 hours",
    },
  ];

  const revealAnswer = (question) => {
    if (question === isActive) return setIsActive("");
    return setIsActive(question);
  };

  return (
    <section
      aria-labelledby="faq-section-title"
      className="flex flex-col gap-7 md:flex-row"
    >
      <div className="faq__image self-center pl-14 pt-14 md:flex-1 lg:flex-[2] lg:max-w-[600px]">
        <img
          src="https://images.pexels.com/photos/7175345/pexels-photo-7175345.jpeg?cs=srgb&dl=pexels-marta-dzedyshko-7175345.jpg&fm=jpg"
          alt="hero section bath bomb feature"
        />
      </div>
      <div className="md:flex-1">
        <h2
          id="faq-section-title"
          className="title font-semibold leading-[54px] md:leading-[64px]"
        >
          Got Questions?
        </h2>
        <div className="mt-14 space-y-10">
          {questions.map(({ question, answer }, index) => {
            const currentlyOpened = isActive === question ? "active" : null;

            return (
              <article key={index} className="faq grid gap-y-7">
                <h3
                  className={`${
                    currentlyOpened ?? "text-lightGrey"
                  } text-2xl lg:text-3xl font-normal`}
                >
                  {question}
                </h3>
                <span
                  className={`faq__reveal-icon faq__reveal-icon--${
                    currentlyOpened ?? "closed"
                  }`}
                  onClick={() => revealAnswer(question)}
                />
                <div
                  className={`h-full overflow-hidden transition-all duration-500 ease-linear faq__answer--${
                    currentlyOpened ?? "hidden"
                  }`}
                >
                  <p className="text-veryLightGrey text-lg py-2.5">{answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
