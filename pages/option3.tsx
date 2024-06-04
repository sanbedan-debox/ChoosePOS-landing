import { NextPage } from "next";

import {
  FAQnew,
  FeatureSection,
  Footertwo,
  Navbar,
  SecFooter,
} from "@/components";
import Heroopt3 from "@/components/Hero/Hero4";
import Grid from "@/components/BentoGrid/grid";

const Home: NextPage = () => {
  return (
    <div className="">
      <Navbar />
      <div className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <Heroopt3 />
          <Grid />
        </div>
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
    </div>
  );
};

export default Home;
