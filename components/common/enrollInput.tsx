import { FC } from "react";
import JoinUsButton from "./joinUsBtn";
interface EnrollInputProps {
  buttonText: string;
}

const EnrollInput: FC<EnrollInputProps> = ({ buttonText }) => {
  return (
    <div className="flex rounded-full shadow-sm w-full bg-secondary bg-opacity-20  p-1">
      <div className="relative flex-grow">
        <label
          htmlFor="email"
          className="hidden mb-2 text-sm font-medium text-gray-300"
        >
          Email address
        </label>
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-neutral-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
          </svg>
        </div>
        {/* text-md mt-2 text-neutral-400 */}
        <input
          className="flex-1 w-full h-10 px-4 py-2 m-1 pl-10 text-white placeholder:text-xs md:placeholder:text-lg placeholder-neutral-400 bg-transparent border-none appearance-none focus:outline-none focus:placeholder-transparent focus:ring-0"
          placeholder="Join the waitlist"
          type="email"
          id="email"
          required
        />
      </div>
      {/* <button
        type="button"
        className="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-primary rounded-full hover:bg-white hover:text-primary focus:outline-none focus:bg-blue-400 md:w-auto w-32"
      >
        Join Us
      </button> */}
      <JoinUsButton text={buttonText} />
    </div>
  );
};
export default EnrollInput;
