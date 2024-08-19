"use client";
import Link from "next/link";
import ProductCardItem from "./ProductsSection/ProductCardItem";
import { useEffect, useRef } from "react";

export default function CategoryRepresentWomen() {
  const imageRef = useRef(null);
  const linkRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const rect = linkRef.current.getBoundingClientRect();
        if (rect.top <= -30 && rect.top > -800) {
          const distanceScrolled = Math.abs(rect.top);
          const maxDistance = 800;
          const scaleFactor =
            1 + Math.min(distanceScrolled / maxDistance, 1) * 0.2;
          imageRef.current.style.transform = `scale(${scaleFactor})`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative z-10">
      <div className="z-40 px-6 pt-16 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <h4 className="mb-3 text-center text-xs tracking-wide text-stone-700">
          MEN
        </h4>
        <h1 className="mb-4 text-center text-3xl tracking-wide">
          Monogram Signatures
        </h1>
        <Link
          ref={linkRef}
          href="/"
          className="flex items-center justify-center tracking-wide underline underline-offset-4"
        >
          Discover
        </Link>
      </div>
      <div className="sticky z-10 pt-20">
        <div className="overflow-hidden">
          <img
            ref={imageRef}
            src="/1920x1080.png"
            alt="stick image"
            className="h-[700px] w-full overflow-hidden object-cover"
          />
        </div>
      </div>
      <div className="sticky z-40">
        <div className="container mx-auto grid grid-cols-2 gap-5 gap-y-8 pb-16 pt-16 lg:grid-cols-4 xl:grid-cols-4">
          <ProductCardItem />
          <ProductCardItem />
          <ProductCardItem />
          <ProductCardItem />
        </div>
      </div>
    </div>
  );
}
