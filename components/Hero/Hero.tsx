// OPT1

import { FC } from "react";
import EnrollInput from "../common/enrollInput";
import Typewriter from "./typeWritterEffect";
const words = ["Data Insights", "Technology", "Marketing"];

const Hero: FC = () => {
  return (
    <div className="px-4 mx-auto md:px-24 lg:px-8 mb-6 md:mb-35 mt-35 flex justify-center align-middle items-center">
      <div
        className="h-screen w-full bg-grid-white/[0.03] 
        absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center
          [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="text-center">
        <div className="md:mx-auto sm:text-center md:mb-12">
          <div className="flex-grow flex flex-col justify-center items-center">
            <h1 className="text-4xl max-w-7xl sm:text-6xl font-bold lg:text-6xl text-center tracking-wide">
              Revolutionising how Restaurants <br />
              use{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                <Typewriter words={words} />
              </span>{" "}
              to drive Growth
            </h1>
            {/* <p className="mt-10 text-center text-lg text-neutral-500 max-w-4xl">
              Revolutionize your checkout experience with our sleek POS solution
              – CHOOSE where transactions meet simplicity, effortlessly.
            </p> */}
          </div>
        </div>
        <div className="flex justify-center mx-auto my-21 w-full max-w-screen-sm">
          <EnrollInput buttonText="Submit" />
          {/* <Modalbtn text={"Join Us"} /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
