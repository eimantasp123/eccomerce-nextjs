import Link from "next/link";
import MobileMenu from "./MobileMenu";
import HeaderRightSides from "./HeaderRightSides";
import TabletMenu from "./TabletMenu";
import HeaderMenu from "./HeaderMenu";

function NavbarNew() {
  return (
    <div className="relative h-20 px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-28">
      {/* Mobile */}
      <div className="flex h-full items-center justify-between md:hidden">
        <Link href="/" className="text-xl font-bold tracking-wide">
          SHOPY
        </Link>
        <MobileMenu />
      </div>

      {/* Bigger screens */}
      <div className="hidden h-full justify-between gap-2 md:flex">
        {/* Left */}
        <div className="flex flex-1">
          <div className="hidden md:flex lg:hidden">
            <TabletMenu />
          </div>
          <div className="hidden lg:flex">
            <HeaderMenu />
          </div>
        </div>
        {/* Center */}
        <div className="flex w-32 items-center justify-center">
          <Link
            href="/"
            className="text-xl font-bold tracking-wide lg:text-2xl xl:text-3xl"
          >
            SHOPY
          </Link>
        </div>
        {/* Right */}
        <div className="flex flex-1 justify-end">
          <HeaderRightSides />
        </div>
      </div>
    </div>
  );
}

export default NavbarNew;
