import { cn } from "@/utils/cn";
import React from "react";
import { NextPage } from "next";
import Navbar from "@/components/Navbar/navbar";
import FeatureSection from "@/components/features/feature";
import SecFooter from "@/components/secfooter";
import Featurestwo from "@/components/features/index2";
import Footertwo from "@/components/footer/index2";
import ImageWithText from "@/option2comps/titleComp";
import { Header } from "@/components";
import FAQSectiontry from "@/unusedComps/faq/try";
import Bentogrid from "@/option2comps/bentofeat/bento";
import TitleComp2 from "@/option2comps/titleComp2";
import BentoGrid from "@/option2comps/bento";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <BentoGrid />
      <div className="gradient-02 absolute w-full h-[200px] top-0 right-0 z-[-1]"></div>
      <TitleComp2 />
      <div className="relative">
        <div className="gradient-04 absolute w-full h-[200px] top-0 right-0 z-[-2]"></div>
        <Featurestwo />
      </div>
      <Bentogrid />
      <FeatureSection />
      <div className="relative">
        <div className="gradient-02 absolute w-full h-[100px] sm:h-[150px] md:h-[200px] lg:h-[250px] xl:h-[300px] top-0 right-0 z-[-2]"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 relative">
        <FAQSectiontry />
        <SecFooter />
        <div className="border-t py-2 mt-2 border-neutral-700"></div>
        <Footertwo />
      </div>
    </>
  );
};

export default Home;
