//Cardless Options

import React from "react";
import { features } from "../../utils/constant";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { fadeIn } from "@/utils/motion";

const FeatureSection = () => {
  return (
    <div className="relative max-w-screen-xl mx-auto px-4 mb-35">
      <LazyMotion features={domAnimation}>
        <div className="text-center">
          <h2 className="text-3xl md:text-3xl sm:text-4xl lg:text-5xl   md:mt-0 mb-10 md:mb-20   font-semibold">
            Hold on{" "}
            <span className="text-transparent bg-clip-text  bg-gradient-to-r from-primary to-secondary">
              there&apos;s more
            </span>
          </h2>
        </div>
        <m.div
          variants={fadeIn("up", "tween", 0, 0.5)} // Adjust direction, type, delay, and duration for desired effect
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="flex flex-wrap mx-auto my-auto"
        >
          {features.map((feature, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 text-white flex justify-center items-center rounded-full bg-gradient-to-r from-primary to-secondary">
                  {feature.icon}
                </div>
                <div className="ml-4">
                  <h5 className="text-lg font-semibold mt-1">{feature.text}</h5>
                  <p className="text-md mt-2 text-neutral-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </m.div>
      </LazyMotion>
    </div>
  );
};

export default FeatureSection;