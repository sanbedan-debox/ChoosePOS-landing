import { neongGradient } from "@/colors/gradients";
import { FEATURES } from "@/constants";
import React from "react";

const Features = () => {
  return (
    <section
      id="feat"
      className="flex-col items-center overflow-hidden bg-feature-bg"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 relative w-full flex justify-end ">
        <div className="flex flex-1 lg:min-h-[900px]">
          <img
            src="/phone.png"
            alt="phone"
            width={440}
            height={1000}
            className="absolute top-[13%] z-10 hidden max-w-[1500px] rotate-[15deg] md:-left-16 lg:flex 3xl:left-20"
          />
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl lg:mt-20 tracking-wide">
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
            <li className="flex w-full flex-1 flex-col items-center justify-center transition duration-300 ease-in-out transform hover:scale-105">
              <a
                href="#know-more"
                className="flex items-center text-lg text-neutral-300"
              >
                Know More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
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
