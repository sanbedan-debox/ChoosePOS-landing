import React, { useState } from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";

import { exploreWorlds } from "../../constants";
import ExploreCard from "./components/ExploreCard"; // Correct import statement for ExploreCard
import { TitleText, TypingText } from "../common/CustomTexts";
import { staggerContainer } from "@/utils/motion";
import { neongGradient } from "@/colors/gradients";

const Explore: React.FC = () => {
  const [active, setActive] = useState<string>("world-2");

  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12" id="explore">
      <LazyMotion features={domAnimation}>
        <m.div
          variants={staggerContainer(1, 3)}
          initial="hidden"
          viewport={{ once: true }}
          whileInView="show"
          // viewport={{ once: false, amount: 0.2 }}
          className="2xl:max-w-[1280px] w-full mx-auto flex flex-col"
        >
          <div className="text-center">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
              Checkout our Feature List.{" "}
              <span
                style={{
                  backgroundImage: `linear-gradient(to right, ${neongGradient.from}, ${neongGradient.to})`,
                }}
                className="text-transparent bg-clip-text"
              >
                And do note that we are just getting started!
              </span>
            </h2>
          </div>
          <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
            {exploreWorlds.map((world, index) => (
              <ExploreCard
                key={world.id}
                {...world}
                index={index}
                active={active}
                handleClick={setActive}
              />
            ))}
          </div>
        </m.div>
      </LazyMotion>
    </section>
  );
};

export default Explore;
