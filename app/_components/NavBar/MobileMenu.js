"use client";

import Link from "next/link";
import { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";

function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <span className="cursor-pointer" onClick={() => setOpen((el) => !el)}>
        <IoMenuOutline className="text-3xl" />
      </span>
      {open && (
        <div className="absolute left-0 top-20 z-20 flex h-[calc(100vh-80px)] w-full flex-col items-center justify-center gap-5 bg-stone-900 text-stone-50">
          <Link href="#">Home</Link>
          <Link href="#">Men</Link>
          <Link href="#">Women</Link>
          <Link href="#">All Products</Link>
          <Link href="#">SALE</Link>
        </div>
      )}
    </div>
  );
}

export default MobileMenu;
