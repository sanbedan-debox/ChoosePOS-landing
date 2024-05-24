import { neongGradient } from "@/colors/gradients";
import React from "react";

const TitleComponent: React.FC = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to right, ${neongGradient.from}, ${neongGradient.to})`,
      }}
      className="p-6 flex justify-center items-center rounded-md mt-20"
    >
      <div className="font-bold text-black text-2xl md:text-3xl max-w-[800px] text-center">
        Built along with Restaurant Owners, Marketers, Technology Experts to
        revolutionise the Restaurant space.
      </div>
    </div>
  );
};

export default TitleComponent;
