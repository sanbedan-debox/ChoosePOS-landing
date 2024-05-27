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

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
      </div>
      <MetricsComponent />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <div className="relative">
          <Explore />
          <GetStarted />
          <div className="gradient-03 z-[-3]" />
          <FeatureSection />
        </div>
      </div>
      <div className="relative">
        <div className="max-w-7xl mx-auto pt-20 px-6">
          <Workflow />
          <div className="gradient-03 z-[-3]" />
        </div>
        <TitleComponent />
        <div className="max-w-7xl mx-auto pt-20 px-6">
          {/* <Pricing /> */}
          {/* <FAQComponent /> */}
          <FAQ faqs={faqs} />
          <SecFooter />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
