import { neongGradient } from "@/colors/gradients";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-6xl text-center tracking-wide">
        Revolutionising how Restaurants use
        <span
          className="bg-gradient-to-r text-transparent bg-clip-text"
          style={{
            backgroundImage: `linear-gradient(to right, ${neongGradient.from}, ${neongGradient.to})`,
          }}
        >
          {" "}
          Data{" "}
        </span>
        to Grow
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Revolutionize your checkout experience with our sleek POS solution –
        CHOOSE where transactions meet simplicity, effortlessly.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="py-3 px-4 mx-3 rounded-md text-black text-bold"
          style={{
            backgroundImage: `linear-gradient(to right, ${neongGradient.from}, ${neongGradient.to})`,
          }}
        >
          Know More
        </a>
      </div>
      <div className="flex mt-10 justify-center">{/* TODO:to do */}</div>
    </div>
  );
};

export default HeroSection;
