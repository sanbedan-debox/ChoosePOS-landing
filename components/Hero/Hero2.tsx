import { neongGradient } from "@/colors/gradients";
import React from "react";

const HeroSecSection: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center mt-6 lg:mt-0 mb-20">
      {/* Left Div for Button */}
      <div className="lg:w-1/2 lg:mr-5 flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl lg:text-6xl text-left tracking-wide">
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
          <p className="mt-10 text-lg text-left text-neutral-500 max-w-4xl">
            Revolutionize your checkout experience with our sleek POS solution –
            CHOOSE where transactions meet simplicity, effortlessly.
          </p>
          <div className="flex mt-10 justify-start">
            <a
              href="#"
              className="py-3 px-4  rounded-md text-black text-bold "
              style={{
                backgroundImage: `linear-gradient(to right, ${neongGradient.from}, ${neongGradient.to})`,
              }}
            >
              Know More
            </a>
          </div>
        </div>
      </div>
      {/* Right Div for Image */}
      <div className="lg:w-1/2 flex justify-center items-center">
        <img
          src="/gihero.gif"
          alt="Example"
          //  className="max-w-full lg:w-3/4"
        />
      </div>
    </div>
  );
};

export default HeroSecSection;
