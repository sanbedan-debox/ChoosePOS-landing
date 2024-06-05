//OPT 1234

import React, { FC } from "react";

interface JoinUsButtonProps {
  text: string;
}

const JoinUsButton: FC<JoinUsButtonProps> = ({ text }) => {
  return (
    <button
      type="button"
      className="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-primary rounded-full hover:bg-white hover:text-primary focus:outline-none focus:bg-blue-400 md:w-auto w-32"
    >
      {text}
    </button>
  );
};

export default JoinUsButton;
