"use client";
import Link from "next/link";
import HeaderMenu from "./HeaderMenu";
import HeaderRightSideIcons from "./HeaderRightSideIcons";
import { ModalProvider } from "../Context/ModalContext";
import { useEffect, useState } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`sticky ${isScrolled ? "scrolled" : ""}`}>
      <div className="flex h-16 items-center justify-between gap-2 px-6 sm:px-8 lg:h-20 lg:px-12 xl:px-16 2xl:px-20">
        {/* Left */}
        <ModalProvider>
          <div className="flex flex-1">
            <HeaderMenu />
          </div>
          {/* Center */}
          <div className="flex w-32 items-center justify-center">
            <Link
              href="/"
              className="text-2xl font-bold tracking-wide lg:text-3xl xl:text-3xl"
            >
              SHOPY
            </Link>
          </div>

          {/* Right */}
          <div className="flex flex-1 justify-end">
            <HeaderRightSideIcons />
          </div>
        </ModalProvider>
      </div>
    </div>
  );
}

export default Navbar;
