import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { navData } from "@/utils/constant";

interface NavItem {
  _id: number;
  title: string;
  href: string;
}

const NavLinks: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      {navData.map(({ _id, title, href }: NavItem) => (
        <Link
          key={_id}
          href={href}
          className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-base text-white transition-colors hover:text-gray-900"
          onMouseEnter={() => setHoveredIndex(_id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === _id && (
              <motion.span
                className="absolute inset-0 rounded-lg bg-gray-100"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <span className="relative z-10">{title}</span>
        </Link>
      ))}
    </>
  );
};

export default NavLinks;
