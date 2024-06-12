"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import HeaderModal from "@/app/_components/HeaderModal/HeaderModal";
import MegaMenuMen from "./MegaMenuMen";
import MegaMenuWomen from "./MegaMenuWomen";
import MegaMenuAllProducts from "./MegaMenuAllProducts";

function HeaderMenu() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [modalPosition, setModalPosition] = useState({
    top: 0,
    left: 0,
    width: "100%",
  });
  const [activeLink, setActiveLink] = useState("");
  const modalTimeoutRef = useRef(null);

  const handleMouseEnter = (event, content, linkName, width = "100%") => {
    if (modalTimeoutRef.current) {
      clearTimeout(modalTimeoutRef.current);
      modalTimeoutRef.current = null;
    }
    setModalContent(content);
    setModalPosition({
      top: 80,
      left: 0,
      width: width,
    });
    setIsModalVisible(true);
    setActiveLink(linkName);
  };

  const handleMouseLeave = () => {
    modalTimeoutRef.current = setTimeout(() => {
      setActiveLink("");
      setIsModalVisible(false);
    }, 200);
  };

  const cancelCloseModal = () => {
    if (modalTimeoutRef.current) {
      clearTimeout(modalTimeoutRef.current);
      modalTimeoutRef.current = null;
    }
  };

  return (
    <div className="hidden justify-start text-base font-medium lg:flex lg:flex-1">
      <Link
        href="/"
        className="flex h-full items-center border-b-2 border-transparent px-3 transition-all duration-200 ease-in-out xl:px-4"
      >
        Home
      </Link>
      <Link
        href="#"
        className={`flex h-full items-center border-b-2 px-3 transition-all duration-200 ease-in-out xl:px-4 ${activeLink === "Men" ? "border-stone-800" : "border-transparent"}`}
        onMouseEnter={(e) => handleMouseEnter(e, <MegaMenuMen />, "Men")}
        onMouseLeave={handleMouseLeave}
      >
        Men
      </Link>
      <Link
        href="#"
        className={`flex h-full items-center border-b-2 px-3 transition-all duration-200 ease-in-out xl:px-4 ${activeLink === "Women" ? "border-stone-800" : "border-transparent"}`}
        onMouseEnter={(e) => handleMouseEnter(e, <MegaMenuWomen />, "Women")}
        onMouseLeave={handleMouseLeave}
      >
        Women
      </Link>
      <Link
        href="#"
        className={`flex h-full items-center border-b-2 px-2 transition-all duration-200 ease-in-out xl:px-4 ${activeLink === "All Products" ? "border-stone-800" : "border-transparent"} `}
        onMouseEnter={(e) =>
          handleMouseEnter(e, <MegaMenuAllProducts />, "All Products")
        }
        onMouseLeave={handleMouseLeave}
      >
        All Products
      </Link>
      <Link
        href="#"
        className="flex h-full items-center border-b-2 border-transparent px-3 text-red-600 transition-all duration-200 ease-in-out xl:px-4"
      >
        SALE
      </Link>

      <HeaderModal
        isVisible={isModalVisible}
        onClose={handleMouseLeave}
        position={modalPosition}
        onMouseEnter={cancelCloseModal}
        onMouseLeave={handleMouseLeave}
        closeOnOutsideClick={false} // Disable outside click close for hover behavior
      >
        {modalContent}
      </HeaderModal>
    </div>
  );
}

export default HeaderMenu;
