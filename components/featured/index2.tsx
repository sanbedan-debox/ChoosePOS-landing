// export default Features;
import { FEATURES } from "@/constants";
import React from "react";

const Features = () => {
  return (
    <section
      id="feat"
      className="flex-col items-center overflow-hidden bg-feature-bg"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 relative w-full flex justify-end ">
        <div className="flex flex-1 items-center justify-center lg:max-h-[600px] h-full mt-20">
          {/* <img
            src="/Credit.png"
            alt="phone"
            width={440}
            height={1000}
            className="absolute top-[24%] z-10 hidden max-w-[1500px] lg:flex 3xl:left-20"
          /> */}
          <video
            src="/vid8.mp4"
            autoPlay
            controls
            loop
            className="rounded-lg mt-10"
            style={{ height: "600px" }}
          />{" "}
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%] ">
          <div className="relative">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-20 md:justify-center  font-semibold">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Features
              </span>
            </h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-8">
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
    <li className="flex w-full flex-1 flex-col items-start rounded-lg bg-blue-100 bg-opacity-20 shadow-md p-6 transition duration-300 ease-in-out transform hover:scale-105">
      {/* Icon */}
      {/* <div className="rounded-full p-2 lg:p-4 bg-gradient-to-r from-primary to-secondary">
        <img
          src={icon}
          alt="map"
          width={28}
          height={28}
          style={{ filter: "invert(100%)" }}
        />
      </div> */}
      {/* Title */}
      <h2 className="text-xl font-semibold mt-1">{title}</h2>
      {/* Description */}
      <p className="text-md mt-2 text-neutral-400">{description}</p>
    </li>
  );
};

export default Features;
