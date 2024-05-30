import React, { useState } from "react";
import { faqs } from "../../utils/constant";

const FAQnew: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="" id="faq">
      <div className="container mx-auto mb-10 md:mb-35">
        <h1 className="text-3xl md:text-3xl sm:text-4xl lg:text-5xl mb-10 md:mb-20 text-center font-semibold text-white">
          Frequently asked{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            questions
          </span>
        </h1>
        <div className="accordion-group">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg bg-primary bg-opacity-20 overflow-hidden transition-max-h duration-500 ease-in-out mb-8 lg:p-4 ${
                activeIndex === index ? "max-h-[600px]" : "max-h-[80px]"
              }`}
            >
              <button
                className={`flex items-center justify-between w-full`}
                onClick={() => toggleAccordion(index)}
              >
                <h1 className="font-semibold text-sm md:text-xl text-white">
                  {faq.question}
                </h1>

                <span className={`rounded-full text-white bg-transparent`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-6 h-6 ${
                      activeIndex === index
                        ? "transform rotate-180 transition-transform duration-500 ease-in-out"
                        : "transform rotate-0 transition-transform duration-500 ease-in-out"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>

              {activeIndex === index && (
                <p className="mt-2 text-md  text-neutral-400">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQnew;
