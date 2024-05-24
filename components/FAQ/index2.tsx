import React, { useState } from "react";

const FAQ: React.FC<{ faqs: { question: string; answer: string }[] }> = ({
  faqs,
}) => {
  const [selectedQuestion, setSelectedQuestion] = useState<number>(0);

  return (
    <div className="max-w-screen-max mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      <div className="text-center">
        <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-white">
          Frequently Asked{" "}
          <span style={{ color: "greenyellow" }}>Questions</span>
        </h3>
      </div>
      <div className="flex flex-col sm:flex-row mt-10">
        <div className="w-full sm:w-2/5 mr-0 sm:mr-8">
          <ul className="divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <li
                key={index}
                onClick={() => setSelectedQuestion(index)}
                className={`cursor-pointer px-4 py-2  hover:text-gray-400`}
              >
                {faq.question}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full sm:w-3/5 p-4 ml-0 sm:ml-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`${
                index === selectedQuestion ? "" : "hidden"
              } text-white`}
            >
              <div className="font-bold text-xl md:text-2xl mb-2">
                {faq.question}
              </div>
              <div className="text-sm md:text-base">{faq.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
