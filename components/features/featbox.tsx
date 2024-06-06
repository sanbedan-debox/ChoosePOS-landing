//Opt 1234

import { HoverEffect } from "../common/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <section
      id="feat"
      className="mx-auto  px-4  lg:flex  flex-col items-center overflow-hidden bg-feature-bg mb-12 md:mb-35"
    >
      <div className="text-center">
        <h2 className="text-3xl md:text-3xl sm:text-4xl lg:text-5xl   md:mt-0 mb-10 md:mb-20   font-semibold">
          Hold on{" "}
          <span className="text-transparent bg-clip-text  bg-gradient-to-r from-primary to-secondary">
            there&apos;s more
          </span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto ">
        <HoverEffect />
      </div>
    </section>
  );
}
