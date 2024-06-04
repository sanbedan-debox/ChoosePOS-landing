import { FC } from "react";
import EnrollInput from "../common/enrollInput";
import Typewriter from "./typeWritterEffect";
const words = ["Data Insights", "Technology", "Marketing"];

const Header: FC = () => {
  return (
    <div className="px-4 mx-auto md:px-24 lg:px-8 mb-6 md:mb-12 mt-35 flex justify-center align-middle items-center">
      <div className="text-center">
        <div className="md:mx-auto sm:text-center md:mb-12">
          <div className="flex-grow flex flex-col justify-center items-center">
            <p className="p-1 uppercase text-sm mb-11 bg-white text-center text-max-w-90 text-primary text-opacity-90 rounded-xl">
              ENABLING RESTAURANTS WITH REAL GROWTH!
            </p>
            <h1 className="text-4xl max-w-7xl sm:text-6xl font-bold lg:text-6xl text-center tracking-wide">
              Revolutionising how Restaurants <br />
              use{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                <Typewriter words={words} />
              </span>{" "}
              to drive Growth
            </h1>
          </div>
        </div>
        <div className="flex justify-center mx-auto my-21 w-full max-w-screen-sm">
          <EnrollInput buttonText="Join us" />
        </div>
      </div>
    </div>
  );
};

export default Header;
