import React, { useState } from "react";
import { motion, Variants } from "framer-motion";

import styles from "../../styles";
import { exploreWorlds } from "../../constants";
import ExploreCard from "./components/ExploreCard"; // Correct import statement for ExploreCard
import { TitleText, TypingText } from "./components/CustomTexts";
import { staggerContainer } from "@/utils/motion";
import { neongGradient } from "@/colors/gradients";

const Explore: React.FC = () => {
  const [active, setActive] = useState<string>("world-2");

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer(1, 3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
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
      </motion.div>
    </section>
  );
};

export default Explore;
