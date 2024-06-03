import { FC } from "react";
import EnrollInput from "../common/enrollInput";
import Typewriter from "./typeWritterEffect";
const words = ["Data", "Integrated Marketing", "Technology"];

const Header: FC = () => {
  return (
    <div className="px-4 mx-auto md:px-24 lg:px-8 mb-35 mt-35 flex justify-center align-middle items-center">
      <div className="text-center">
        <div className="md:mx-auto sm:text-center md:mb-12">
          <div className="flex-grow flex flex-col justify-center items-center">
            <p className="uppercase tracking-widest mb-8 bg-white text-md text-center text- max-w-90 text-primary text-opacity-90">
              CHOOSE where transactions meet simplicity
            </p>
            <h1 className="text-4xl max-w-7xl sm:text-6xl font-bold lg:text-6xl text-center tracking-wide">
              Revolutionising how Restaurants <br />
              use{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                <Typewriter words={words} />
              </span>{" "}
              to Grow
            </h1>
            <p className="mt-10 text-center text-lg text-neutral-500 max-w-4xl">
              Revolutionize your checkout experience with our sleek POS solution
              – CHOOSE where transactions meet simplicity, effortlessly.
            </p>
          </div>
        </div>
        <div className="flex justify-center mx-auto my-10 w-full max-w-screen-sm">
          <EnrollInput buttonText="Join us" />
        </div>
      </div>
    </div>
  );
};

export default Header;
