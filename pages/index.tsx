import React from "react";
import { NextPage } from "next";
import Navbar from "@/components/Navbar/navbar";
import HeroSection from "@/components/Hero/Hero";
import FeatureSection from "@/components/featured/feature";
import Workflow from "@/components/Workflow";
import Pricing from "@/components/pricing";
import Footer from "@/components/footer";
import Explore from "@/components/explore";
import SecFooter from "@/components/secfooter";
import FAQComponent from "@/components/FAQ";
import MetricsComponent from "@/components/metrics";
import TitleComponent from "@/components/common/TitleComponent";
import FAQ from "@/components/FAQ/index2";
import { faqs } from "@/constants";
import GetStarted from "@/components/gettingStarted";
import Featurestwo from "@/components/featured/index2";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <div className="gradient-02 absolute w-full h-[200px] top-0 right-0 z-[-1]"></div>
      </div>
      <MetricsComponent />
      <div className="relative">
        <div className="gradient-04 absolute w-full h-[200px] top-0 right-0 z-[-2]"></div>

        <Featurestwo />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Gradient 01 */}
        {/* <div className="gradient-feature absolute w-full h-[200px] top-0 right-0 z-[-2]"></div> */}

        {/* Feature Section */}
        <FeatureSection />
      </div>

      <TitleComponent />
      <div className="max-w-7xl mx-auto px-6 relative">
        <SecFooter />
        {/* Secondary Footer */}

        {/* Divider */}
        <div className="border-t py-10 border-neutral-700"></div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
