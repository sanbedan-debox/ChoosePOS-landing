import { neongGradient } from "@/colors/gradients";
import React from "react";

const MetricsComponent: React.FC = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to right, ${neongGradient.from}, ${neongGradient.to})`,
      }}
      className="p-6 flex flex-col md:flex-row justify-between items-center rounded-md space-y-4 md:space-y-0"
    >
      <div className="flex flex-col gap-2 max-w-full md:max-w-[750px]">
        <div className="font-bold text-black text-2xl md:text-3xl">
          &quot;Restaurant Owners should focus only on the Top 2 Metrics - Great
          Food and Great Service.&quot;
        </div>

        <div className="flex items-center space-x-2 md:space-x-5 md:mt-5">
          {/* <img
            src="/headset.svg"
            alt="headset"
            className="w-[24px] h-[24px] object-contain"
            style={{ filter: "invert(90%)" }}
          /> */}
          <div className="font-bold text-gray-900 text-lg md:text-xl max-w-full md:max-w-[500px]">
            For everything else they need to CHOOSE the right partner
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto">
        <div
          style={{
            backgroundImage: `linear-gradient(to right, ${neongGradient.from}, ${neongGradient.to})`,
          }}
          className="p-4 rounded-lg shadow-md border-2 border-black flex-1 md:flex-none"
        >
          <div className="text-gray-700 text-lg">Trusted Restaurants</div>
          <div className="text-gray-900 text-2xl font-bold">10K +</div>
        </div>
        <div
          style={{
            backgroundImage: `linear-gradient(to right, ${neongGradient.from}, ${neongGradient.to})`,
          }}
          className="p-4 rounded-lg shadow-md border-2 border-black flex-1 md:flex-none"
        >
          <div className="text-gray-700 text-lg">Regions</div>
          <div className="text-gray-900 text-2xl font-bold">7+</div>
        </div>
      </div>
    </div>
  );
};

export default MetricsComponent;
