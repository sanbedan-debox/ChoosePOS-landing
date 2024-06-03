import { FEATURErow2, FEATURESrow1 } from "../../utils/constant";
import React from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import EnrollInput from "../common/enrollInput";

const Featurebox = () => {
  return (
    <section
      id="feat"
      className="mx-auto px-4 lg:flex flex-col items-center overflow-hidden mb-35"
    >
      <div className="text-center">
        <h2 className="text-3xl md:text-3xl sm:text-4xl lg:text-5xl md:mt-0 mb-10 md:mb-20 md:justify-center font-semibold">
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Features
          </span>
        </h2>
      </div>
      <LazyMotion features={domAnimation}>
        <m.div
          variants={fadeIn("up", "tween", 0, 0.5)} // Adjust direction, type, delay, and duration for desired effect
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="z-20 flex w-full flex-col lg:w-[80%] "
        >
          <ul className="grid gap-10 md:gap-20 md:grid-cols-3 lg:mg-1 lg:gap-8 mb-10">
            {FEATURESrow1.map((feature) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                description={feature.description}
                image={feature.image} // Add image prop
              />
            ))}

            {/* Anchor tab */}
            {/* <li className="flex w-full flex-1 flex-col items-center justify-center transition duration-300 ease-in-out transform hover:scale-105">
              <button className="relative inline-block w-full h-full py-2 px-6 rounded-l-xl rounded-t-xl bg-primary hover:bg-white hover:text-primary focus:text-secondary focus:bg-gray-200 text-white text-2xl md:text-4xl font-bold leading-loose transition duration-200">
                Know More
                <span className="absolute right-0 top-0 bottom-0 flex items-center justify-center pr-4 opacity-0 transition-opacity duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 stroke-current transform"
                    viewBox="0 0 20 20"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v8m0 0l-4-4m4 4l4-4"
                    />
                  </svg>
                </span>
              </button>
            </li> */}
            {/* <li className="flex w-full flex-1 flex-col justify-between items-center rounded-lg bg-primary-700 bg-primary bg-opacity-20 shadow-md p-2 md:p-6 transition duration-300 ease-in-out transform hover:scale-105 h-auto md:h-96">
              <img
                src="./f6.jpg"
                alt="Enroll Now"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h2
                className="text-lg mt-2 mb-2 md:mb-0"
                style={{ fontSize: "19px" }}
              >
                Join the Waitlist :)
              </h2>
              <EnrollInput buttonText={"Enroll Now"} />
            </li> */}

            <style jsx>
              {`
                .relative:hover .opacity-0 {
                  opacity: 1;
                }
              `}
            </style>
          </ul>
          <ul className="grid gap-10 md:gap-20 md:grid-cols-2 lg:mg-1 lg:gap-8">
            {FEATURErow2.map((feature) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                description={feature.description}
                image={feature.image} // Add image prop
              />
            ))}
          </ul>
        </m.div>
      </LazyMotion>
      <div className="mt-2"></div>
    </section>
  );
};

type FeatureItemProps = {
  title: string;
  description: string;
  image: string; // Add image prop
};

const FeatureItem = ({ title, description, image }: FeatureItemProps) => {
  return (
    <li className="flex w-full flex-1 flex-col justify-between items-start rounded-lg bg-primary-700 bg-primary bg-opacity-20 shadow-md p-2 md:p-6 transition duration-300 ease-in-out transform hover:scale-105 h-auto md:h-96">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <h2 className="text-lg mt-2" style={{ fontSize: "19px" }}>
        {title}
      </h2>
      <p className="text-md mt-2 text-neutral-400" style={{ fontSize: "15px" }}>
        {description}
      </p>
    </li>
  );
};

export default Featurebox;
