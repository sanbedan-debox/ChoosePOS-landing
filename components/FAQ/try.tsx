import { useState } from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { fadeIn } from "@/utils/motion";
const FAQSectiontry = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="">
      <div className="container mx-auto mb-35">
        <h1 className="text-xl md:text-3xl sm:text-4xl lg:text-5xl mb-10 md:mb-20 text-center font-semibold text-white">
          Frequently asked{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            questions
          </span>
        </h1>
        <LazyMotion features={domAnimation}>
          <m.div
            variants={fadeIn("up", "tween", 0, 0.5)} // Adjust direction, type, delay, and duration for desired effect
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="space-y-8"
          >
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-primary bg-opacity-20 overflow-hidden"
                style={{
                  maxHeight: openIndex === index ? "1000px" : "80px",
                  transition: "max-height 0.5s ease", // Adjust the duration here
                  overflow: "hidden",
                }}
              >
                <button
                  className="flex items-center justify-between w-full"
                  onClick={() => toggleFAQ(index)}
                >
                  <h1 className="font-semibold text-xl text-white">
                    {faq.question}
                  </h1>

                  <span
                    className={`rounded-full ${
                      openIndex === index
                        ? "text-white bg-transparent"
                        : "text-white bg-transparent"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={
                          openIndex === index
                            ? "M5 15l7-7 7 7"
                            : "M19 9l-7 7-7-7"
                        }
                      />
                    </svg>
                  </span>
                </button>

                {openIndex === index && (
                  <p className="mt-2 text-md text-gray-200 dark:text-gray-300">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </m.div>
        </LazyMotion>
      </div>
    </section>
  );
};

const faqs = [
  {
    question: "How can I pay for my appointment?",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?",
  },
  {
    question:
      "Is the cost of the appointment covered by private health insurance?",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?",
  },
  {
    question: "Do I need a referral?",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?",
  },
  {
    question: "What are your opening hours?",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?",
  },
  {
    question: "What can I expect at my first consultation?",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?",
  },
];

export default FAQSectiontry;
