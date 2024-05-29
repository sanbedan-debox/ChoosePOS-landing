// export default Features;
import { FEATURES } from "@/constants";
import React from "react";

const Features = () => {
  return (
    <section
      id="feat"
      className="mx-auto  px-4  lg:flex  flex-col items-center overflow-hidden bg-feature-bg mb-35 "
    >
      <div className="text-center">
        <h2 className="text-xl md:text-3xl sm:text-4xl lg:text-5xl  md:mt-0 mb-10 md:mb-20  md:justify-center font-semibold">
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Features
          </span>
        </h2>
      </div>
      <div className="mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 relative w-full flex justify-between ">
        <div className="hidden lg:flex items-center justify-center lg:max-h-[300px] h-full">
          <video
            src="/vid7.mp4"
            autoPlay
            controls
            loop
            className="rounded-lg"
            style={{ height: "300px" }}
          />{" "}
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%] ">
          <ul className=" grid gap-10 md:gap-20 md:grid-cols-2 lg:mg-20 lg:gap-8">
            {FEATURES.map((feature) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
            {/* Anchor tab */}
            <li className="flex w-full flex-1 flex-col items-center justify-center  transition duration-300 ease-in-out transform hover:scale-105">
              <button className="inline-block w-full h-full py-2 px-6 rounded-l-xl rounded-t-xl bg-primary hover:bg-white hover:text-primary focus:text-secondary focus:bg-gray-200 text-white text-2xl md:text-4xl font-bold leading-loose transition duration-200">
                Know More
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

type FeatureItemProps = {
  title: string;
  icon: string;
  description: string;
};

const FeatureItem = ({ title, icon, description }: FeatureItemProps) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start rounded-lg bg-primary-700 bg-secondary bg-opacity-20 shadow-md p-6 transition duration-300 ease-in-out transform hover:scale-105">
      <h2 className="text-xl font-semibold mt-1">{title}</h2>
      <p className="text-md mt-2 text-neutral-300">{description}</p>
    </li>
  );
};

export default Features;
