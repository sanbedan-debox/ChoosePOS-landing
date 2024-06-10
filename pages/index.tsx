//OPT 1
import React, { useEffect } from "react";
import { NextPage } from "next";
import {
  CardHoverEffectDemo,
  Footertwo,
  Grid,
  Hero,
  SecFooter,
  TitleComponent1,
} from "@/components";
import Header from "@/components/Navbar/navbar";
import ModalPopUp from "@/components/common/enrollModal";
import useStore from "@/store/store";
import { Toast } from "@/components/common/Toast";

const Home: NextPage = () => {
  const { isModalOpen, toggleModal, toast } = useStore();
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isModalOpen]);

  return (
    <>
      <Header />
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

      <div></div>
      {isModalOpen && <ModalPopUp />}
      {toast && <Toast message={toast.message} type={toast.type} />}
    </>
  );
};

export default Home;
