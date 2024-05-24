import React from "react";
import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../../constants";
import { neongGradient } from "@/colors/gradients";

const Pricing = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Pricing
      </h2>
      <div className="flex flex-wrap justify-center">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl">
              <p className="text-4xl mb-8">
                {option.title}
                {option.title === "Pro" && (
                  <span
                    style={{
                      backgroundImage: `linear-gradient(to right, ${neongGradient.from}, ${neongGradient.to})`,
                    }}
                    className=" text-transparent bg-clip-text text-xl mb-4 ml-2 inline-block"
                  >
                    (Most Popular)
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="text-5xl font-semibold mr-2">
                  {option.price}
                </span>
                <span className="text-neutral-400 tracking-tight">/Month</span>
              </p>
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-4 flex items-center">
                    <CheckCircle2 className="mr-2 w-6 h-6 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                style={{
                  backgroundImage: `linear-gradient(to right, ${neongGradient.from}, ${neongGradient.to})`,
                }}
                className="inline-block w-full h-12 px-8 mt-10 text-xl text-center text-black font-semibold uppercase rounded-lg transition duration-200"
              >
                Subscribe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
