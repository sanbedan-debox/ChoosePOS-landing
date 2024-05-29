// import React from "react"; // Import React
// import { motion } from "framer-motion"; // Import motion from framer-motion

// import { footerVariants } from "../../utils/motion"; // Import footerVariants from motion utilities

// // Define Footer component
// const SecFooter: React.FC = () => (
//   <motion.footer
//     variants={footerVariants}
//     initial="hidden"
//     whileInView="show"
//     viewport={{ once: true }}
//     className="relative"
//   >
//     <div className="gradient-footer absolute w-full h-[50px] md:h-[100px] left-0 bottom-0 z-[-8]"></div>

//     <div className="2xl:max-w-[1280px] w-full mx-auto flex flex-col gap-8 md:z-10 mt-20 md:mt-0 mb-20">
//       <div className="flex items-center justify-between flex-wrap gap-5">
//         <div className="text-3xl sm:text-5xl lg:text-6xl text-white ">
//           Join the{" "}
//           <span
//             style={{
//               WebkitBackgroundClip: "text",
//               color: "transparent",
//             }}
//             className=" bg-gradient-to-r from-primary to-secondary "
//           >
//             Waitlist
//           </span>
//         </div>

//         <div className=" w-full max-w-lg  bg-transparent border rounded-full dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-300 focus-within:ring-opacity-40">
//           <form className="flex flex-col md:flex-row items-center">
//             <input
//               type="email"
//               placeholder="Enter your email address"
//               className="flex-1 w-full h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
//             />

//             <button
//               type="button"
//               className="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-primary rounded-full hover:bg-blue-400 focus:outline-none focus:bg-blue-400 md:w-auto w-32"
//             >
//               Join Us
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>

//     <div className="2xl:max-w-[1280px] w-full mx-auto px-4 md:px-0 mt-8 mb-20">
//       <p className="text-lg sm:text-2xl lg:text-3xl text-center text-centertext-white">
//         Built along with Restaurant Owners, Marketers, Technology Experts to
//         revolutionise the Restaurant space.
//       </p>
//     </div>
//   </motion.footer>
// );

// export default SecFooter; // Export Footer component
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
    <div className="gradient-footer absolute w-full h-[50px] md:h-[100px] left-0 bottom-0 z-[-8]"></div>

    <div className="2xl:max-w-[1280px] w-full mx-auto flex flex-col gap-8 md:z-10 mt-20 md:mt-0 mb-20">
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
              Built along with Restaurant Owners, Marketers, Technology Experts
              to revolutionise the Restaurant space.
            </p>
          </div>
        </div>

        <div className=" flex justify-center  max-w-screen-sm">
          <div className="flex rounded-full shadow-sm w-full bg-secondary bg-opacity-20  ">
            <div className="relative flex-grow">
              <label
                htmlFor="email"
                className="hidden mb-2 text-sm font-medium text-gray-300"
              >
                Email address
              </label>
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-neutral-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </div>
              {/* text-md mt-2 text-neutral-400 */}
              <input
                className="flex-1 w-full h-10 px-4 py-2 m-1 pl-10 text-white placeholder:text-xs md:placeholder:text-lg placeholder-neutral-400 bg-transparent border-none appearance-none focus:outline-none focus:placeholder-transparent focus:ring-0"
                placeholder="Join the waitlist"
                type="email"
                id="email"
                required
              />
            </div>
            <button
              type="button"
              className="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-primary rounded-full hover:bg-white hover:text-primary focus:outline-none focus:bg-blue-400 md:w-auto w-32"
            >
              Join Us
            </button>
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default SecFooter; // Export Footer component
