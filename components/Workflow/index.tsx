// import React from "react";
// import { CheckCircle2 } from "lucide-react";
// import codeImg from "../../assets/code.jpg";
// import { checklistItems } from "../../utils/constant";
// import { neongGradient } from "@/colors/gradients";

// const Workflow = () => {
//   return (
//     <div className="mt-20">
//       <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide mb-10">
//         Accelerate your{" "}
//         <span
//           style={{
//             backgroundImage: `linear-gradient(to right, ${neongGradient.from}, ${neongGradient.to})`,
//           }}
//           className="text-transparent bg-clip-text"
//         >
//           Restaurant workflow.
//         </span>
//       </h2>
//       <div className="flex flex-wrap justify-center items-center">
//         <div className="p-2 w-full lg:w-1/2">
//           <video
//             src="/vid2.mp4"
//             autoPlay
//             loop
//             controls
//             className="rounded-lg"
//             style={{ height: "800px" }}
//           />
//         </div>
//         <div className="pt-12 w-full lg:w-1/2">
//           {checklistItems.map((item, index) => (
//             <div key={index} className="flex mb-8 lg:mb-12">
//               <div className="text-green-400 flex-shrink-0 w-10 h-10 p-2 bg-neutral-900 rounded-full">
//                 <CheckCircle2 />
//               </div>
//               <div className="ml-4">
//                 <h3 className="text-lg font-semibold">{item.title}</h3>
//                 <p className="text-md text-neutral-500 mt-1">
//                   {item.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Workflow;
