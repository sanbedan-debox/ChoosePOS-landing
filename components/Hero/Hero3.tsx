import { FC } from "react";
import EnrollInput from "../common/enrollInput";
const Header: FC = () => {
  return (
    <div
      className="px-4  mx-auto md:px-24 lg:px-8 mb-35 mt-35 flex justify-center align-middle
  items-center"
    >
      <div className="text-center">
        <div className=" md:mx-auto sm:text-center md:mb-12">
          <div className=" flex-grow flex flex-col justify-center items-center">
            <h1 className="text-4xl max-w-7xl sm:text-6xl font-bold lg:text-6xl text-center tracking-wide">
              Revolutionising how Restaurants <br />
              use
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                {" "}
                Data{" "}
              </span>
              to Grow
            </h1>
            <p className="mt-10 text-center text-lg  text-neutral-500 max-w-4xl">
              Revolutionize your checkout experience with our sleek POS solution
              – CHOOSE where transactions meet simplicity, effortlessly.
            </p>
          </div>
        </div>
        {/* 
          <div className="mb-35 w-full max-w-lg mx-auto mt-6 bg-transparent border rounded-full border-white focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 focus-within:ring-opacity-40">
            <label htmlFor="hs-trailing-button-add-on" className="sr-only">
              Label
            </label>
            <div className="flex rounded-full shadow-sm">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 w-full h-10 px-4 py-2 m-1 text-white placeholder:text-xs md:placeholder:text-lg placeholder-white bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
              />
              <button
                type="button"
                className="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-primary rounded-full hover:bg-blue-400 focus:outline-none focus:bg-blue-400 md:w-auto w-32"
              >
                Join Us
              </button>
            </div>
          </div> */}
        <div className=" flex justify-center mx-auto my-10 w-full max-w-screen-sm">
          <EnrollInput buttonText="Join us" />
        </div>
        {/* <div
            className="font-semibold text-center text-
          white text-lg md:text-2xl max-w-xs sm:max-w-md md:max-w-6xl mx-auto "
          >
            &quot;Restaurant Owners should focus only on the Top 2 Metrics -{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Great Food and Great Service.
            </span>
            &quot; For everything else they need to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary">
              CHOOSE{" "}
            </span>
            the right partner
          </div> */}
      </div>
    </div>
  );
};

export default Header;
