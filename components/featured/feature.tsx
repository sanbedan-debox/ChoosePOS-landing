import React from "react";
import { features } from "../../constants";
import { motion } from "framer-motion";
import { neongGradient } from "@/colors/gradients";

const FeatureSection = () => {
  return (
    <div className="relative mt-10 ">
      <div className="text-center">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl lg:mt-20 tracking-wide">
          Hold on{" "}
          <span
            // style={{
            //   backgroundImage: `linear-gradient(to right, ${neongGradient.from}, ${neongGradient.to})`,
            // }}
            className="text-transparent bg-clip-text  bg-gradient-to-r from-primary to-secondary"
          >
            there&apos;s more
          </span>
        </h2>
      </div>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex flex-wrap mt-10 lg:mt-20 mx-auto"
      >
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 mb-8 ">
            <div className="flex items-start">
              <div
                // style={{
                //   background: `linear-gradient(to right, ${neongGradient.from}, ${neongGradient.to})`,
                // }}
                className="flex-shrink-0 w-10 h-10 text-white flex justify-center items-center rounded-full  bg-gradient-to-r from-primary to-secondary"
              >
                {feature.icon}
              </div>
              <div className="ml-4">
                <h5 className="text-xl font-semibold mt-1">{feature.text}</h5>
                <p className="text-md mt-2 text-neutral-400">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default FeatureSection;
