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
        <div className="flex flex-col max-w-xl text-center">
          <div className="text-3xl sm:text-5xl lg:text-6xl text-white ">
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
            <p className="text-lg sm:text-xl lg:text-2xl text-center text-centertext-white">
              Built along with Restaurant Owners, Marketers, Technology Experts
              to revolutionise the Restaurant space.
            </p>
          </div>
        </div>

        <div className="mb-35 w-full max-w-lg mx-auto mt-6 bg-transparent border rounded-full border-white focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 focus-within:ring-opacity-40">
          <label htmlFor="hs-trailing-button-add-on" className="sr-only">
            Label
          </label>
          <div className="flex rounded-full shadow-sm">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 w-full h-10 px-4 py-2 m-1  placeholder:text-xs md:placeholder:text-lg text-white placeholder-white bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
            />
            <button
              type="button"
              className="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-primary rounded-full hover:bg-blue-400 focus:outline-none focus:bg-blue-400 md:w-auto w-32"
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
