import React,{useEffect} from 'react';
import { NextPage } from "next";
import {
    CardHoverEffectDemo,
    Footertwo,
    Grid,
    Header,
    Hero,
    SecFooter,
    TitleComponent1,
    WhyChoose
  } from "@/components";
  import ModalPopUp from "@/components/common/enrollModal";
import useStore from "@/store/store";
import { Toast } from "@/components/common/Toast";
import group1 from "../assets/jpg/group1.webp"
import Image from 'next/image';
import Head from 'next/head';

const AboutUs: NextPage = () => {
    const { isModalOpen, toast } = useStore();
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isModalOpen]);
  return (
    <div>
       <Head>
        <title>About Us | ChoosePOS - Best Innovative Point of Sale Solutions In USA</title>
        <meta name="description" content="Learn about ChoosePOS, your trusted partner in innovative point of sale solutions. Discover our mission, values, and commitment to revolutionizing  hospitality management through cutting-edge POS technology." />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="About Us | ChoosePOS - Innovative Point of Sale Solutions" />
        <meta property="og:description" content="Discover ChoosePOS: Our mission, values, and commitment to revolutionizing hospitality management with cutting-edge POS technology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.choosepos.com/about-us" />
        <meta property="og:image" content="https://www.choosepos.com/features/disputes.webp" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | ChoosePOS - Innovative POS Solutions" />
        <meta name="twitter:description" content="Learn about ChoosePOS, revolutionizing hospitality management with innovative point of sale technology." />
        <meta name="twitter:image" content="https://www.choosepos.com/features/disputes.webp" />
      </Head>
        <Header/>
        {/* <div>
          <Image src={group1} alt='about-us' className='w-full bg-cover h-[400px]' />
        </div> */}
        <WhyChoose/>
        <div className="max-w-7xl mx-auto px-6 relative">
        {/* <FAQnew /> */}
        <SecFooter />
        <div className="border-t py-2 mt-2 border-neutral-700"></div>
        <Footertwo />
        <ModalPopUp />
        {toast && <Toast message={toast.message} type={toast.type} />}
      </div>
    </div>
  )
}

export default AboutUs