import { neongGradient } from "@/colors/gradients";
import React from "react";
import EnrollInput from "../common/enrollInput";

const HeroSecSection: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center mb-20 min-h-screen mx-20">
      <div className="lg:w-1/2 lg:mr-5 flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl lg:text-6xl text-left">
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
            <EnrollInput buttonText="Join Now" />
          </div>
        </div>
      </div>
      {/* Right Div for Image */}
      <div className="lg:w-1/2 flex justify-center items-center">
        <img
          src="/hello.jpg"
          alt="Example"
          //  className="max-w-full lg:w-3/4"
        />
      </div>
    </div>
  );
};

export default HeroSecSection;
