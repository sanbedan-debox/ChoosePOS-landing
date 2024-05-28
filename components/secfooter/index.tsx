import React from "react"; // Import React
import { motion } from "framer-motion"; // Import motion from framer-motion

import { footerVariants } from "../../utils/motion"; // Import footerVariants from motion utilities

// Define Footer component
const SecFooter: React.FC = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="relative"
  >
    <div className="gradient-footer absolute w-full h-[100px] left-0 bottom-0"></div>

    <div className="absolute min-w-screen h-[100px] left-[37%] bottom-0 bg-footer-gradient from-primary to-secondary blur-[150px] z-[-4]"></div>
    <div className="2xl:max-w-[1280px] w-full mx-auto flex flex-col gap-8 md:mt-0 mt-10">
      <div className="flex items-center justify-between flex-wrap gap-5">
        <div className="text-3xl sm:text-5xl lg:text-6xl text-white text">
          Join the{" "}
          <span
            style={{
              // backgroundImage: `linear-gradient(to right, ${neongGradient.from}, ${neongGradient.to})`,
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
            className=" bg-gradient-to-r from-primary to-secondary "
          >
            Waitlist
          </span>
        </div>

        <div className="flex justify-center my-0 md:my-20 w-full max-w-screen-sm">
          <div className="flex flex-col sm:flex-row w-full space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="relative flex-grow">
              <label
                htmlFor="email"
                className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Email address
              </label>
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </div>
              <input
                className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-full border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Join the waitlist"
                type="email"
                id="email"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-full border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-full hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default SecFooter; // Export Footer component
