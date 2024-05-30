import React from "react";
import { NextPage } from "next";
import {
  Navbar,
  Header,
  FeatureSection,
  SecFooter,
  Featurestwo,
  FAQSectiontry,
  Footertwo,
} from "@/components";
const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      {/* <HeroSection /> */}
      <Header />
      <div className="gradient-02 absolute w-full h-[200px] top-0 right-0 z-[-1]"></div>
      {/* <div className="max-w-7xl mx-auto pt-20 px-6"></div> */}
      {/* <MetricsComponent /> */}
      <div className="relative">
        <div className="gradient-04 absolute w-full h-[200px] top-0 right-0 z-[-2]"></div>
        <Featurestwo />
      </div>
      {/* <div className="max-w-7xl mx-auto px-6 relative"> */}
      {/* Gradient 01 */}
      {/* <div className="gradient-feature absolute w-full h-[200px] top-0 right-0 z-[-2]"></div> */}

      {/* Feature Section */}
      <FeatureSection />
      {/* </div> */}
      <div className="relative">
        <div className="gradient-02 absolute w-full h-[100px] sm:h-[150px] md:h-[200px] lg:h-[250px] xl:h-[300px] top-0 right-0 z-[-2]"></div>
      </div>

      {/* <TitleComponent /> */}

      <div className="max-w-7xl mx-auto px-6 relative">
        <FAQSectiontry />
        <SecFooter />
        {/* Secondary Footer */}
        {/* Divider */}
        <div className="border-t py-2 mt-2 border-neutral-700"></div>
        <Footertwo />
      </div>
      {/* <Footerlast /> */}
      {/* <Footerthree /> */}
    </>
  );
};

export default Home;
