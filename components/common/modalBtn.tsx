import React, { FC } from "react";

import useStore from "@/store/store";

interface ModalbtnProps {
  text: string;
}

const Modalbtn: FC<ModalbtnProps> = ({ text }) => {
  const { isModalOpen, toggleModal } = useStore();
  return (
    <div>
      <button
        type="button"
        className="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-primary rounded-full hover:bg-white hover:text-primary focus:outline-none focus:bg-blue-400 md:w-auto w-32"
        onClick={toggleModal}
      >
        {text}
      </button>
    </div>
  );
};

export default Modalbtn;
