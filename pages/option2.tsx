import React from "react";
import { NextPage } from "next";
import { Navbar, Header, SecFooter, Footertwo } from "@/components";
import Grid from "@/components/BentoGrid2/grid";
import { CardHoverEffectDemo } from "@/components/Features/featbox";
import TitleComponent2 from "@/components/common/TitleComponent2";
const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <TitleComponent2 />
      <div className="gradient-02 absolute w-full h-[200px] top-0 right-0 z-[-1]"></div>
      <div className="relative">
        <div className="gradient-04 absolute w-full h-[200px] top-0 right-0 z-[-2]"></div>
        <div className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
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
        <SecFooter />
        <div className="border-t py-2 mt-2 border-neutral-700"></div>
        <Footertwo />
      </div>
    </>
  );
};

export default Home;
