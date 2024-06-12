"use client";

import Link from "next/link";
import { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";

function TabletMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex">
      <span
        className="z-50 flex h-full cursor-pointer items-center border-b-2 border-transparent px-2 transition-all duration-200 ease-in-out hover:border-stone-800 xl:px-4"
        onClick={() => setOpen((el) => !el)}
      >
        <IoMenuOutline className="text-2xl" />
      </span>
      {open && (
        <div className="absolute left-0 top-20 z-10 flex h-12 w-full items-center bg-stone-900 text-stone-50">
          <Link
            href="#"
            className="flex h-full w-1/5 items-center justify-center border-b-2 border-transparent transition-all duration-200 ease-in-out hover:border-stone-50"
          >
            Home
          </Link>
          <Link
            href="#"
            className="flex h-full w-1/5 items-center justify-center border-b-2 border-transparent transition-all duration-200 ease-in-out hover:border-stone-50"
          >
            Men
          </Link>
          <Link
            href="#"
            className="flex h-full w-1/5 items-center justify-center border-b-2 border-transparent transition-all duration-200 ease-in-out hover:border-stone-50"
          >
            Women
          </Link>
          <Link
            href="#"
            className="flex h-full w-1/5 items-center justify-center border-b-2 border-transparent transition-all duration-200 ease-in-out hover:border-stone-50"
          >
            All Products
          </Link>
          <Link
            href="#"
            className="flex h-full w-1/5 items-center justify-center border-b-2 border-transparent transition-all duration-200 ease-in-out hover:border-stone-50"
          >
            SALE
          </Link>
        </div>
      )}
    </div>
  );
}

export default TabletMenu;
