import React from "react";
import { NextPage } from "next";
import MetricsComponent from "@/components/metrics";
import { FloatingNav } from "@/components/Navbar/NavBar2";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import HeroSecSection from "@/components/Hero/Hero2";
import Subscribe from "@/components/subscribe";
import Featurestwo from "@/components/featured/index2";
import Camp from "@/components/explore/index2";

const Home: NextPage = () => {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <>
      <FloatingNav navItems={navItems} />
      <div className=" mx-auto pt-20 px-10">
        <HeroSecSection />
      </div>
      <MetricsComponent />
      <Featurestwo />
      <Camp />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Subscribe />
      </div>
    </>
  );
};

export default Home;
