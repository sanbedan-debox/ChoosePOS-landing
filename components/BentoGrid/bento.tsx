import { useState } from "react";
// Also install this npm i --save-dev @types/react-lottie
// import GridGlobe from "./GridGlobe";
import animationData from "@/utils/confetti.json";
import { cn } from "@/utils/cn";
import EnrollInput from "../common/enrollInput";
import Image from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <Image
              fill
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
          <div className="absolute inset-0 bg-black opacity-15"></div>
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && "w-full "} `}>
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          {id === 6 ? (
            <div className="flex flex-col items-center justify-center text-white font-bold   text-center">
              <div className=" md:text-2xl lg:text-3xl text-xl mb-3 px-4">
                Join the waitlist
              </div>
              <div className="font-extralight md:max-w-screen-md md:text-xs lg:text-base text-sm text-neutral-300 z-10">
                {description}
              </div>
              {/* <EnrollInput buttonText={"Enroll"} /> */}
            </div>
          ) : (
            <>
              <div className="text-lg lg:text-2xl max-w-96 font-bold z-10">
                {title}
              </div>
              <div className="font-extralight md:max-w-screen-md md:text-xs lg:text-base text-sm text-neutral-300 z-10">
                {description}
              </div>
            </>
          )}
          {/* {id === 6 && (
            <div className="mt-5 relative">
              <div
                className={`absolute -bottom-5 right-0 ${
                  copied ? "block" : "block"
                }`}
              ></div>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};
