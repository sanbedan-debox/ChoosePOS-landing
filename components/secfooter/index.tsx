import React from "react"; // Import React
import { motion } from "framer-motion"; // Import motion from framer-motion

import { footerVariants } from "../../utils/motion"; // Import footerVariants from motion utilities
import EnrollInput from "../common/enrollInput";

const SecFooter: React.FC = () => (
  <>
    <footer className="relative" id="enroll">
      <div className="gradient-02 absolute w-full h-[20px] md:h-[300px] left-0 bottom-0 z-[-8]"></div>
      <motion.div
        variants={footerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="2xl:max-w-[1280px] w-full mx-auto flex flex-col gap-8 md:z-10 mt-20 md:mt-0 mb-20"
      >
        <div className="flex items-center justify-between flex-wrap gap-5">
          <div className="flex flex-col max-w-xl">
            <div className="text-3xl md:text-3xl sm:text-4xl lg:text-5xl text-white ">
              Join the{" "}
              <span
                style={{
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
                className=" bg-gradient-to-r from-primary to-secondary "
              >
                Waitlist
              </span>
            </div>
            <div className="2xl:max-w-[1280px] w-full mx-auto py-2">
              <p className="text-lg sm:text-xl lg:text-xl  text-neutral-400 mt-2">
                Built along with Restaurant Owners, Marketers, Technology
                Experts to revolutionise the Restaurant space.
              </p>
            </div>
          </div>
          <div className="flex justify-center w-[600px]">
            <EnrollInput buttonText="Submit" />
          </div>
        </div>
      </motion.div>
    </footer>
  </>
);

export default SecFooter; // Export Footer component
