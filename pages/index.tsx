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
import HeroSection from "@/components/Hero/Hero";
import HeroSecSection from "@/components/Hero/Hero2";
const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      {/* <div className="footer-gradient  absolute w-full h-[200px] top-40 right-0 z-[-1]"></div> */}
      <Header />
      {/* <HeroSecSection /> */}
      <div className="gradient-02 absolute w-full h-[200px] top-0 right-0 z-[-1]"></div>
      <div className="relative">
        <div className="gradient-04 absolute w-full h-[200px] top-0 right-0 z-[-2]"></div>
        <Featurestwo />
      </div>
      <FeatureSection />
      <div className="relative">
        <div className="gradient-02 absolute w-full h-[100px] sm:h-[150px] md:h-[200px] lg:h-[250px] xl:h-[300px] top-0 right-0 z-[-2]"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 relative">
        <FAQnew />
        <SecFooter />

        <div className="border-t py-2 mt-2 border-neutral-700"></div>
        <Footertwo />
      </div>
    </>
  );
};

export default Home;
