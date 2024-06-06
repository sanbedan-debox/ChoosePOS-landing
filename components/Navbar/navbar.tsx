import { Menu, X } from "lucide-react";
import { useState, FC } from "react";
import logo1 from "../../assets/logo/logoWhite.png";
import { navItems } from "../../utils/constant";
import Image from "next/image";
import Link from "next/link";
import Modalbtn from "../common/modalBtn";

interface NavItem {
  href: string;
  label: string;
}

const Navbar: FC = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const closeDrawer = () => {
    setMobileDrawerOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-xl border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <Link onClick={closeDrawer} href="/">
              <Image className="mr-2" src={logo1} alt="Logo" width={150} />
            </Link>
          </div>
          <ul className="hidden lg:flex ml-14 text-lg space-x-12">
            {navItems.map((item: NavItem, index: number) => (
              <li key={index}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            {/* <Link href="#enroll">
              <JoinUsButton text="Join the Waitlist" />
            </Link> */}
            <Modalbtn text={"Enroll Now"} emailp="" />
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 top-12 bg-black  w-full px-2 py-1 h-svh flex flex-col text-right items-end lg:hidden">
            <ul className="mt-5">
              {navItems.map((item: NavItem, index: number) => (
                <li
                  key={index}
                  className="text-xl hover:text-neutral-400 px-4 py-1 list-item-with-bullet"
                >
                  <Link href={item.href} onClick={closeDrawer}>
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="text-xl hover:text-neutral-400 px-4 py-1 list-item-with-bullet">
                <Link
                  href="#enroll"
                  className="text-white"
                  onClick={closeDrawer}
                >
                  Enroll Now
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
