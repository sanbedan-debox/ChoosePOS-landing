import { cn } from "@/utils/cn";
import { features } from "@/utils/constant";
import { fadeIn } from "@/utils/motion";
import {
  AnimatePresence,
  domAnimation,
  LazyMotion,
  m,
  motion,
} from "framer-motion";
import { useState } from "react";

export const HoverEffect = () => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <LazyMotion features={domAnimation}>
      <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3")}>
        {features.map((item, idx) => (
          <div
            key={item.text}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full  bg-slate-800/[0.8] block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>

            <m.div
              variants={fadeIn("up", "tween", 0, 0.5)} // Adjust direction, type, delay, and duration for desired effect
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              }}
              className={cn(
                "rounded-2xl h-auto  md:h-48 w-full overflow-hidden border border-white/[0.2] group-hover:border-slate-700 relative z-20"
              )}
            >
              <div className="bg-dot-white/[0.15] z-25 h-full w-full absolute"></div>
              <div className="flex flex-col md:flex-row items-start p-4">
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 text-white flex justify-center items-center rounded-full bg-gradient-to-r from-primary to-secondary mb-2 md:mb-0">
                  {item.icon}
                </div>
                <div className="ml-0 md:ml-4">
                  <h5 className="text-lg font-semibold mt-1 text-left">
                    {item.text}
                  </h5>
                  <p className="text-md mt-2 text-neutral-400 text-left">
                    {item.description}
                  </p>
                </div>
              </div>
            </m.div>
          </div>
        ))}
      </div>
    </LazyMotion>
  );
};
