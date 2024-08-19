"use client";
import Link from "next/link";
import HeaderMenu from "./HeaderMenu";
import HeaderRightSideIcons from "./HeaderRightSideIcons";
import { ModalProvider } from "../Context/ModalContext";

function Navbar() {
  return (
    <div className="scrolled sticky z-50 flex h-16 items-center justify-between gap-2 bg-white px-6 sm:px-8 lg:h-20 lg:px-12 xl:px-16 2xl:px-20">
      <ModalProvider>
        {/* Left */}
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
  );
}

export default Navbar;
