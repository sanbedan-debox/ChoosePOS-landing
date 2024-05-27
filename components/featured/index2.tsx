import { neongGradient } from "@/colors/gradients";
import { FEATURES } from "@/constants";
import React from "react";

const Features = () => {
  return (
    <section
      id="feat"
      className="flex-col items-center overflow-hidden  bg-feature-bg"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 relative w-full flex justify-end">
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
              Our Features
            </h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
};

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div
        style={{
          background: `linear-gradient(to right, ${neongGradient.from}, ${neongGradient.to})`,
          //   color: "black",
        }}
        className="rounded-full p-2 lg:p-4 "
      >
        <img
          src={icon}
          alt="map"
          width={28}
          height={28}
          style={{ filter: "invert(100%)" }}
        />
      </div>
      <h2 className="text-xl font-semibold mt-1">{title}</h2>
      <p className="text-md mt-2 text-neutral-400">{description}</p>
    </li>
  );
};

export default Features;
