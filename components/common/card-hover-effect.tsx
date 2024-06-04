import { cn } from "@/utils/cn";
import { features } from "@/utils/constant";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-3 0",
        className
      )}
    >
      {features.map((item, idx) => (
        <Link
          href={""}
          key={item.text}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
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

          <div
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
            className={cn(
              "rounded-2xl h-44 w-full  overflow-hidden border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
              className
            )}
          >
            <div className="bg-dot-white/[0.15] z-25 h-full w-full absolute"></div>
            <div className="flex items-start p-4">
              <div className="flex-shrink-0 w-10 h-10 text-white flex justify-center items-center rounded-full bg-gradient-to-r from-primary to-secondary">
                {item.icon}
              </div>
              <div className="ml-4">
                <h5 className="text-lg font-semibold mt-1">{item.text}</h5>
                <p className="text-md mt-2 text-neutral-400">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
