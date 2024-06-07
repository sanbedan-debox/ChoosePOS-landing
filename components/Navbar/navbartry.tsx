"use client";
import React, { useEffect, useState } from "react";
import { Popover } from "@headlessui/react";
import { TbMenu2 } from "react-icons/tb";
import { IoIosArrowUp } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import NavLinks from "./NavLinks";
import Container from "./Container";
import Image from "next/image";
import logo1 from "../../assets/logo/logoWhite.png";
import Modalbtn from "../common/modalBtn";
import { navData } from "@/utils/constant";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 50);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      // Clean up the scroll event listener when the component unmounts
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const handleLinkClick = () => {
    // Function to handle link click, used to close the popover
  };

  return (
    <header className="sticky top-0 z-50 py-3 backdrop-blur-xl border-b border-neutral-700/80">
      <nav>
        <Container className="relative z-50 flex justify-between px-4">
          {/* Logo */}
          <div className="relative z-10 flex items-center gap-16">
            <Link href="/">
              <Image className="mr-2" src={logo1} alt="Logo" width={150} />
            </Link>
          </div>
          {/* NavLinks */}
          <div className="hidden lg:flex lg:gap-10 items-center">
            <NavLinks />
          </div>
          {/* Buttons */}
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex lg:gap-10 items-center">
              <Modalbtn text={"Join Us"} emailp="" />
            </div>
            {/* Mobile NavLinks */}
            <Popover className="lg:hidden">
              {({ open, close }) => (
                <>
                  <Popover.Button
                    className="relative z-10 -m-2    inline-flex items-center rounded-lg stroke-gray-900  hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 [&:not(:focus-visible)]:focus:outline-none outline-none"
                    aria-label="Toggle site navigation"
                  >
                    {open ? (
                      <IoIosArrowUp className="text-2xl" />
                    ) : (
                      <TbMenu2 className="text-2xl" />
                    )}
                  </Popover.Button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <Popover.Overlay
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-black backdrop-blur h-lvh"
                        />
                        <Popover.Panel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-black px-6 pb-6 pt-12 shadow-2xl shadow-gray-900/20"
                        >
                          <div className="space-y-4">
                            {navData.map(({ _id, title, href }) => (
                              <Link
                                className="block text-base leading-7 tracking-tight text-white"
                                href={href}
                                key={_id}
                                onClick={() => {
                                  handleLinkClick();
                                  close();
                                }}
                              >
                                {title}
                              </Link>
                            ))}
                          </div>
                          <div className="mt-4 flex flex-col items-center">
                            <Modalbtn text={"Join Us"} emailp="" />
                          </div>
                        </Popover.Panel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
