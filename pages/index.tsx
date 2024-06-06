//OPT 1
import React from "react";
import { NextPage } from "next";
import Grid from "@/components/BentoGrid/grid";
import { CardHoverEffectDemo } from "@/components/Features/featbox";

import TitleComponent1 from "@/components/common/TitleComponentOpt1";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/navbar";
import SecFooter from "@/components/SecFooter";
import Footertwo from "@/components/Footer/Footer";
const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <TitleComponent1 />
      <div className="gradient-02 absolute w-full h-[200px] top-0 right-0 z-[-1]"></div>
      <div className="relative">
        <div className="gradient-04 absolute w-full h-[200px] top-0 right-0 z-[-2]"></div>
        <div className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
          <div className="max-w-7xl w-full">
            <Grid />
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="gradient-02 absolute w-full h-[100px] sm:h-[150px] md:h-[200px] lg:h-[250px] xl:h-[300px] top-0 right-0 z-[-2]"></div>
      </div>
      <CardHoverEffectDemo />

      {/* <FeatureSection /> */}
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* <FAQnew /> */}
        <SecFooter />

        <div className="border-t py-2 mt-2 border-neutral-700"></div>
        <Footertwo />
      </div>
    </>
  );
};

export default Home;
