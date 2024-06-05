//OPT 4

import { cn } from "@/utils/cn";
import React from "react";

const TitleCompFinal: React.FC = () => {
  return (
    <div>
      <div
        className={cn(
          "row-span-1 relative overflow-hidden  px-10 md:px-2 py-8 md:py-12 justify-center items-center group hover:shadow-xl transition duration-200 shadow-input dark:shadow-none flex flex-col space-y-4 bg-white mb-12 md:mb-35"
        )}
      >
        <figure className="max-w-screen-md mx-auto text-center">
          <svg
            className="w-10 h-10 mx-auto mb-3  text-primary"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <blockquote>
            <p className="text-2xl italic font-medium text-primary">
              Restaurant Owners should focus only on the Top 2 Metrics - Great
              Food and Great Service. For everything else they need to CHOOSE
              the right partner
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
            <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
              <cite className="pe-3 font-medium text-primary">
                - Darshan Vyas
              </cite>
              <cite className="ps-3 text-sm text-primary">
                Founder of Debox Consulting and Inradius
              </cite>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default TitleCompFinal;
