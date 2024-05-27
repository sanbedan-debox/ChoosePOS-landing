import { neongGradient } from "@/colors/gradients";
import React from "react";

const MetricsComponent: React.FC = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to right, ${neongGradient.from}, ${neongGradient.to})`,
      }}
      className="p-6 flex flex-col justify-center items-center space-y-4 h-64 md:h-60"
    >
      <div className="flex flex-col gap-6 max-w-full text-center px-4 md:px-0">
        <div className="font-bold text-black text-2xl md:text-4xl max-w-xs sm:max-w-md md:max-w-6xl my-auto">
          &quot;Restaurant Owners should focus only on the Top 2 Metrics - Great
          Food and Great Service.&quot;
        </div>

        <div className="flex justify-center">
          <div className="font-bold text-gray-900 text-2xl md:text-4xl max-w-xs sm:max-w-md md:max-w-6xl">
            For everything else they need to CHOOSE the right partner
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricsComponent;
