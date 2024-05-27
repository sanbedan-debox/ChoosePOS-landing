import React from "react"; // Import React
import { motion } from "framer-motion"; // Import motion from framer-motion
import { textContainer, textVariant2 } from "../../utils/motion"; // Import motion utilities

// Define props type for TypingText component
interface TypingTextProps {
  title: string;
  textStyles?: string;
}

// Define TypingText component
export const TypingText: React.FC<TypingTextProps> = ({
  title,
  textStyles,
}) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

// Define props type for TitleText component
interface TitleTextProps {
  title: any;
  textStyles?: string;
}

// Define TitleText component
export const TitleText: React.FC<TitleTextProps> = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
  >
    {title}
  </motion.h2>
);
