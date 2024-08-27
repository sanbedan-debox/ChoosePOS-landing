"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll, useSpring, MotionValue } from "framer-motion";
import { cn } from "@/utils/cn";
import Image from "next/image";
import Image3 from "../../assets/jpg/darshan.png";
import Link from "next/link";
import { fadeIn } from "@/utils/motion";
import { StaticImageData } from 'next/image';

interface TracingBeamProps {
  className?: string;
}

interface TracingSvgProps {
  svgHeight: number;
  y1: MotionValue;
  y2: MotionValue;
  scrollYProgress: MotionValue;
}

interface TeamMemberSectionProps {
  image: StaticImageData;
  name: string;
  quote: string;
  description: string;
  reverse?: boolean;
}

interface SocialIconProps {
  social: 'facebook' | 'instagram' | 'twitter' | 'linkedIn';
}

interface HoverCardProps {
  image: StaticImageData;
  title: string;
  description: string;
  qoute: string;
}

export const TracingBeam: React.FC<TracingBeamProps> = ({ className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState<number>(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight);
    }
  }, []);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
    { stiffness: 500, damping: 90 }
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
    { stiffness: 500, damping: 90 }
  );

  return (
    <motion.div
      ref={ref}
      className={cn("relative w-full md:mt-10 mt-0 xl:px-36 lg:px-12 px-1 mx-auto h-full", className)}
    >
      <TracingSvg svgHeight={svgHeight} y1={y1} y2={y2} scrollYProgress={scrollYProgress} />
      <div ref={contentRef}>
        <div className="text-center">
          <h2 className="text-3xl md:text-3xl sm:text-4xl lg:text-5xl  font-semibold">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Team
            </span>
          </h2>
        </div>
    
          
        <TeamMemberSection
          image={Image3}
          name="Ankur"
          quote="A serial entrepreneur and investor with more than 10 years in the restaurant and hospitality space, Ankur has over 15 years of experience in the technology sector, having worked with top multinational companies in the USA."
          description="Ankur owns, operates, and has invested in half a dozen restaurants and ice cream chains based in Atlanta. With hands-on experience in successfully operating profitable restaurant businesses, Ankur aims to bring his decade of experience to the table through CHOOSE. His goal is to develop a product for the restaurant industry that truly understands its challenges and limitations."
          />
        <TeamMemberSection
          image={Image3}
          name="Darshan"
          quote="A serial entrepreneur with over a decade of experience in business consulting, marketing, and technology solutions."
          description="Darshan's consulting firm, Debox, offers business consulting, marketing, and technology services to clients globally. Since 2016, Debox has been helping restaurants in the USA drive profitable growth through differential marketing and has created a niche in marketing restaurants. With CHOOSE, Darshan focuses on bringing the best of technology, data, and integrated marketing to revolutionize the restaurant industry in the USA."
          reverse
          />
          </div>
      
    </motion.div>
  );
};

const TracingSvg: React.FC<TracingSvgProps> = ({ svgHeight, y1, y2, scrollYProgress }) => (
  <div className="absolute -left-8 lg:left-6 top-0">
    <motion.div
      transition={{ duration: 0.1, delay: 0 }}
      animate={{
        boxShadow:
          scrollYProgress.get() > 0
            ? "none"
            : "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      }}
      className="ml-[27px] h-4 w-4 rounded-full shadow-sm flex items-center justify-center"
    >
      <motion.div
        transition={{ duration: 0.2, delay: 0.5 }}
        animate={{
          backgroundColor: scrollYProgress.get() > 0 ? "white" : "var(--emerald-500)",
          borderColor: scrollYProgress.get() > 0 ? "white" : "var(--emerald-600)",
        }}
        className="hidden rounded-full border border-neutral-300 bg-white"
      />
    </motion.div>
    <svg
      viewBox={`0 0 20 ${svgHeight}`}
      width="20"
      height={svgHeight}
      className="ml-4 block"
      aria-hidden="true"
    >
      <motion.path
        d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
        fill="none"
        stroke="#9091A0"
        strokeOpacity="0.16"
        transition={{ duration: 10 }}
      />
      <motion.path
        d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
        fill="none"
        stroke="url(#gradient)"
        strokeWidth="1.25"
        className="motion-reduce:hidden"
        transition={{ duration: 10 }}
      />
      <defs>
        <motion.linearGradient
          id="gradient"
          gradientUnits="userSpaceOnUse"
          x1="0"
          x2="0"
          y1={y1}
          y2={y2}
        >
          <stop stopColor="#18CCFC" stopOpacity="0" />
          <stop stopColor="#18CCFC" />
          <stop offset="0.325" stopColor="#6344F5" />
          <stop offset="1" stopColor="#AE48FF" stopOpacity="0" />
        </motion.linearGradient>
      </defs>
    </svg>
  </div>
);

const HoverCard: React.FC<HoverCardProps> = ({ image, title, description, qoute }) => {
  return (
    <div className="relative w-full max-w-sm mx-auto overflow-hidden rounded-xl shadow-lg">
      <Image src={image} alt={title} className="w-full h-full object-cover" />
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 bg-bla  bg-opacity-75 flex flex-col justify-center items-center text-white p-4"
      >
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm">{description}</p>
      </motion.div>
      <p className="p-4">{qoute}</p>
    </div>
  );
};


const TeamMemberSection: React.FC<TeamMemberSectionProps> = ({ image, name, quote, description, reverse }) => (
  <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-between py-10 md:py-16 relative`}>
    {reverse ? (
      <div className="gradient-02 absolute w-full h-[20px] md:h-[300px] right-0 bottom-0 z-[-8]"></div>
    ) : (
      <div className="gradient-04 absolute w-full h-[200px] top-[100px] right-0 z-[-2]"></div>
    )}
    <motion.div
      variants={fadeIn(reverse ? "left" : "right", "tween", 0.2, 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative mb-8 md:mb-0 md:w-1/2"
    >
      <Image src={image} alt={`${name} Image`} className="lg:w-2/3 md:w-[80%] md:h-[580px] h-[500px] w-[90%]  mx-auto rounded-[30px]" />
    </motion.div>
    <motion.div
      variants={fadeIn(reverse ? "right" : "left", "tween", 0.2, 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="md:text-lg text-[16px] text-center md:text-left md:w-1/2 md:px-8 px-3"
    >
      <div className=" mb-10 text-neutral-400 ">&quot;{quote}&quot;</div>
      <p className="mb-8">{description}</p>
      <SocialLinks />
    </motion.div>
  </div>
);

const SocialLinks: React.FC = () => (
  <div className="flex justify-center md:justify-start space-x-6">
    {['linkedIn', 'twitter'].map((social) => (
      <Link key={social} href="#" className="text-white hover:text-gray-500">
        <span className="sr-only">{social}</span>
        <SocialIcon social={social as 'facebook' | 'instagram' | 'twitter' | 'linkedIn'} />
      </Link>
    ))}
  </div>
);

const SocialIcon: React.FC<SocialIconProps> = ({ social }) => {
  const icons: Record<'facebook' | 'instagram' | 'twitter'| 'linkedIn', JSX.Element> = {
    facebook: (
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988H8.898v-2.89h1.54V9.412c0-1.522.927-2.352 2.282-2.352.653 0 1.34.115 1.34.115v1.47h-.755c-.743 0-.978.463-.978.937v1.21h1.665l-.266 2.89h-1.399v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
      </svg>
    ),
    instagram: (
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.313 3.608 1.288.975.975 1.226 2.242 1.288 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.313 2.633-1.288 3.608-.975.975-2.242 1.226-3.608 1.288-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.313-3.608-1.288-.975-.975-1.226-2.242-1.288-3.608C2.175 15.583 2.163 15.203 2.163 12s.012-3.584.07-4.849c.062-1.366.313-2.633 1.288-3.608.975-.975 2.242-1.226 3.608-1.288C8.417 2.175 8.797 2.163 12 2.163zm0 1.534c-3.14 0-3.508.012-4.737.069-1.066.049-1.63.218-2.01.398a3.528 3.528 0 00-1.243.801c-.354.354-.624.775-.801 1.243-.18.38-.35.944-.398 2.01-.057 1.23-.069 1.597-.069 4.737s.012 3.508.069 4.737c.049 1.066.218 1.63.398 2.01.177.468.447.89.801 1.243.354.354.775.624 1.243.801.38.18.944.35 2.01.398 1.23.057 1.597.069 4.737.069s3.508-.012 4.737-.069c1.066-.049 1.63-.218 2.01-.398a3.528 3.528 0 001.243-.801c.354-.354.624-.775.801-1.243.18-.38.35-.944.398-2.01.057-1.23.069-1.597.069-4.737s-.012-3.508-.069-4.737c-.049-1.066-.218-1.63-.398-2.01a3.528 3.528 0 00-.801-1.243c-.354-.354-.775-.624-1.243-.801-.38-.18-.944-.35-2.01-.398-1.23-.057-1.597-.069-4.737-.069zm0 4.591a5.655 5.655 0 110 11.31 5.655 5.655 0 010-11.31zm0 1.534a4.121 4.121 0 100 8.243 4.121 4.121 0 000-8.243zm6.406-1.899a1.319 1.319 0 11-2.638 0 1.319 1.319 0 012.638 0z" clipRule="evenodd" />
      </svg>
    ),
    twitter: (
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M22.46 6.003c-.77.344-1.594.577-2.46.682a4.324 4.324 0 001.884-2.383 8.564 8.564 0 01-2.725 1.042 4.305 4.305 0 00-7.333 3.924A12.206 12.206 0 013.1 4.967a4.304 4.304 0 001.333 5.743 4.294 4.294 0 01-1.949-.539v.054a4.305 4.305 0 003.45 4.218 4.308 4.308 0 01-1.943.073 4.305 4.305 0 004.016 2.986A8.638 8.638 0 012 19.428a12.176 12.176 0 006.593 1.935c7.91 0 12.23-6.55 12.23-12.23 0-.186-.004-.372-.013-.556a8.748 8.748 0 002.15-2.224z" clipRule="evenodd" />
      </svg>
    ),
    linkedIn:(
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="white" stroke-width="0.1" stroke-linecap="round" stroke-linejoin="round">
  <path  fillRule="evenodd" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" clipRule="evenodd"></path>
  <rect x="2" y="9" width="4" height="12"></rect>
  <circle cx="4" cy="4" r="2"></circle>
</svg>
    )
  };

  return icons[social];
};
