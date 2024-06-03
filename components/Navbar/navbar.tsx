import { Menu, X } from "lucide-react";
import { useState, FC } from "react";
import logo1 from "../../assets/logo/logoWhite.png";
import { navItems } from "../../utils/constant";
import Image from "next/image";
import JoinUsButton from "../common/joinUsBtn";

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
            <a onClick={closeDrawer} href="#">
              <Image className="mr-2" src={logo1} alt="Logo" width={150} />
            </a>
          </div>
          <ul className="hidden lg:flex ml-14 text-lg space-x-12">
            {navItems.map((item: NavItem, index: number) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#enroll">
              <JoinUsButton text="Join the Waitlist" />
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 top-12 bg-primary bg-opacity-90 w-full px-2 py-1 min-h-screen flex flex-col text-right items-end lg:hidden">
            <ul className="mt-5">
              {navItems.map((item: NavItem, index: number) => (
                <li
                  key={index}
                  className="text-xl hover:text-neutral-400 px-4 py-1 list-item-with-bullet"
                >
                  <a href={item.href} onClick={closeDrawer}>
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="text-xl hover:text-neutral-400 px-4 py-1 list-item-with-bullet">
                <a href="#enroll" className="text-white" onClick={closeDrawer}>
                  Enroll Now
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
