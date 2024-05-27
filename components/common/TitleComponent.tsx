import { neongGradient } from "@/colors/gradients";
import React from "react";

const TitleComponent: React.FC = () => {
  return (
    <div
      // style={{
      //   backgroundImage: `linear-gradient(to right, ${neongGradient.from}, ${neongGradient.to})`,
      // }}
      // className="p-6 mt-10 flex justify-center items-center space-y-4 h-64 md:h-60  bg-gradient-to-r from-primary to-secondary"
      className="p-6 mt-10 flex justify-center items-center space-y-4 h-64 md:h-60 backdrop-blur-4xl  border-neutral-700/80 "
    >
      {/* <div className="font-bold text-black text-2xl md:text-3xl max-w-[800px] text-center">
        Built along with Restaurant Owners, Marketers, Technology Experts to
        revolutionise the Restaurant space.
      </div> */}
      <div className="flex flex-col gap-6 max-w-full text-center px-4 md:px-0">
        <div className="font-bold text-white text-2xl md:text-4xl max-w-xs sm:max-w-md md:max-w-6xl my-auto">
          &quot;Built along with Restaurant Owners, Marketers, Technology
          Experts to revolutionise the Restaurant space.&quot;
        </div>
      </div>
    </div>
  );
};

export default TitleComponent;
