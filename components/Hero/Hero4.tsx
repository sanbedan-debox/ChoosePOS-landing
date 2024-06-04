import EnrollInput from "@/components/common/enrollInput";
import { TextGenerateEffect } from "./TextGenEffect";
import { Spotlight } from "./Spotlight";
const Heroopt3 = () => {
  return (
    // <div className="min-h-screen">
    <div className="">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="blue" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full bg-grid-white/[0.05] 
        absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black
          [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative mt-20 mb-35 z-10 ">
        <div className="max-w-3xl md:max-w-5xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-md text-center text-max-w-90 text-primary text-opacity-90">
            CHOOSE where transactions meet simplicity
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Revolutionising how Restaurants use Data to build growth"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />
          <EnrollInput buttonText={"Join Now"} />
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Heroopt3;
