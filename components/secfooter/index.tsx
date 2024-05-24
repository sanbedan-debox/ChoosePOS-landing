import React from "react"; // Import React
import { motion } from "framer-motion"; // Import motion from framer-motion

import styles from "../../styles"; // Import styles
import { footerVariants } from "../../utils/motion"; // Import footerVariants from motion utilities
import { neongGradient } from "@/colors/gradients";

// Define Footer component
const SecFooter: React.FC = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px]">
          Join the{" "}
          <span
            style={{
              backgroundImage: `linear-gradient(to right, ${neongGradient.from}, ${neongGradient.to})`,
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Waitlist
          </span>
        </h4>

        <button
          type="button"
          style={{
            backgroundImage: `linear-gradient(to right, ${neongGradient.from}, ${neongGradient.to})`,
          }}
          className="flex items-center h-fit py-4 px-6  rounded-md gap-[12px]"
        >
          <img
            src="/headset.svg"
            alt="headset"
            className="w-[24px] h-[24px] object-contain "
            style={{ filter: "invert(100%)" }}
          />
          <span className="font-normal text-xl font-bold text-black">
            Enroll Now !
          </span>
        </button>
      </div>
    </div>
  </motion.footer>
);

export default SecFooter; // Export Footer component
