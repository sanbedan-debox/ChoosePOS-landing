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
  FeaturesBento,
  TitleComponent,
} from "@/components";
import StartSteps from "@/components/common/StartSteps";
import TitleComp2 from "@/option2comps/titleComp2";
import TitleComponent2 from "@/components/common/TitleComponent2";
import Grid2 from "@/components/BentoGrid/grid2";
import FeatureBoxes, {
  CardHoverEffectDemo,
} from "@/components/features/featbox";
import FeatureBox from "@/components/features/featbox";
const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      {/* <div className="footer-gradient  absolute w-full h-[200px] top-40 right-0 z-[-1]"></div> */}
      <Header />
      {/* <HeroSecSection /> */}
      <div className="max-w-7xl w-full mx-auto">
        <TitleComponent />
      </div>

      <div className="max-w-7xl w-full mx-auto">
        <TitleComponent2 />
      </div>

      <div className="gradient-02 absolute w-full h-[200px] top-0 right-0 z-[-1]"></div>
      <TitleComp2 />
      <div className="gradient-02 absolute w-full h-[200px] top-0 right-0 z-[-1]"></div>
      <div className="relative">
        <div className="gradient-04 absolute w-full h-[200px] top-0 right-0 z-[-2]"></div>
        <div className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
          <div className="max-w-7xl w-full">
            <Grid2 />
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="gradient-02 absolute w-full h-[100px] sm:h-[150px] md:h-[200px] lg:h-[250px] xl:h-[300px] top-0 right-0 z-[-2]"></div>
      </div>
      <CardHoverEffectDemo />
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
