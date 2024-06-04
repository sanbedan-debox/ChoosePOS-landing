import { neongGradient } from "@/colors/gradients";
import { cn } from "@/utils/cn";
import React from "react";

const TitleComponent: React.FC = () => {
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl mb-35 py-8 md:py-12 justify-center items-center group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none flex flex-col space-y-4 bg-transparent"
      )}
    >
      <div className="flex flex-col gap-6 max-w-full text-center px-4 md:px-0">
        <div className="flex jus font-bold text-center text-white text-xl md:text-3xl max-w-xs sm:max-w-md md:max-w-6xl my-auto relative">
          <img
            src="/openQb.svg"
            alt="Opening Quote"
            className="absolute -left-16 -top-0 w-10 h-10 md:w-23 md:h-23"
          />
          <p className="leading-normal tracking-normal relative ">
            {`Restaurant Owners should focus only on the Top 2 Metrics - Great Food and Great Service. For everything else they need to CHOOSE the right partner`}
          </p>
          <img
            src="/closeQb.svg"
            alt="Closing Quote"
            className="absolute -r  md:-right-16 md:-bottom-0 w-10 h-10 md:w-23 md:h-23 z-[-2]"
          />
        </div>
      </div>
      {/* <div className={`absolute right-0 -bottom-5`}>
        <img
          src="/grid.svg"
          alt="grid"
          className="object-cover object-center w-full h-full"
        />
      </div> */}
    </div>
  );
};

export default TitleComponent;
