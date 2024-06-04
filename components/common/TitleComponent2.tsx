import { cn } from "@/utils/cn";
import React from "react";

const TitleComponent2: React.FC = () => {
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden mb-8 md:mb-24 px-10 md:px-2 py-8 md:py-12 justify-center items-center group hover:shadow-xl transition duration-200 shadow-input dark:shadow-none flex flex-col space-y-4 bg-white"
      )}
    >
      <div className="flex flex-col gap-6 max-w-full text-center px-4 md:px-0">
        <div className="relative flex font-bold text-center text-primary text-xl md:text-3xl max-w-xs sm:max-w-md md:max-w-6xl mx-auto">
          <img
            src="/openQb.svg"
            alt="Opening Quote"
            className="absolute -left-10 -top-2 w-8 h-8 md:w-12 md:h-12"
          />
          <p className="leading-normal tracking-normal">
            Restaurant Owners should focus only on the Top 2 Metrics - Great
            Food and Great Service. For everything else they need to CHOOSE the
            right partner
          </p>
          <img
            src="/closeQb.svg"
            alt="Closing Quote"
            className="absolute -right-7 -bottom-1 w-8 h-8 md:w-12 md:h-12"
          />
        </div>
      </div>
    </div>
  );
};

export default TitleComponent2;
