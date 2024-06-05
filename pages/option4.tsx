import React from "react";
import { NextPage } from "next";
import {
  Navbar,
  Header,
  FeatureSection,
  SecFooter,
  Featurestwo,
  FAQnew,
  Footertwo,
} from "@/components";
import Grid from "@/option2comps/BentoGrid/grid";
import { CardHoverEffectDemo } from "@/components/features/featbox";
import TitleComp2 from "@/option2comps/titleComp2";
import TitleComponent2 from "@/components/common/TitleComponent2";
import Headeropt2 from "@/components/Hero/HeroForopt2";
import TitleCompFinal from "@/components/common/TitleComponentFinal";
const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      {/* <div className="footer-gradient  absolute w-full h-[200px] top-40 right-0 z-[-1]"></div> */}
      <Headeropt2 />
      <TitleCompFinal />

      {/* <div className="max-w-7xl w-full mx-auto"> */}
      {/* </div> */}
      {/* <HeroSecSection /> */}
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
        {/* <FAQnew /> */}
        <SecFooter />

        <div className="border-t py-2 mt-2 border-neutral-700"></div>
        <Footertwo />
      </div>
    </>
  );
};

export default Home;
