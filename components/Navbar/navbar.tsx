import { Menu, X } from "lucide-react";
import { useState, FC } from "react";
import logo1 from "../../assets/logo/logoWhite.png";
import { navItems } from "../../constants";
import Image from "next/image";
import { neongGradient } from "@/colors/gradients";

interface NavItem {
  href: string;
  label: string;
}

const Navbar: FC = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 ">
      <div className="container px-4 mx-auto relative lg:text-sm ">
        <div className="flex justify-between items-center ">
          <div className="flex items-center flex-shrink-0">
            <Image className="mr-2" src={logo1} alt="Logo" width={100} />
            {/* <span className="text-2xl text-bold tracking-tight">CHOOSE</span> */}
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item: NavItem, index: number) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a
              href="#"
              className="py-2 px-3 rounded-full text-black text-bold"
              style={{
                backgroundImage: `linear-gradient(to right, ${neongGradient.from}, ${neongGradient.to})`,
              }}
            >
              Join The Waitlist
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item: NavItem, index: number) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a
                href="#"
                style={{
                  backgroundImage: `linear-gradient(to right, ${neongGradient.from}, ${neongGradient.to})`,
                }}
                className="py-2 px-3 rounded-md "
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
