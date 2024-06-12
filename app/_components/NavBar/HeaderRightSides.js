"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  IoBagOutline,
  IoHeartOutline,
  IoPersonOutline,
  IoSearchOutline,
} from "react-icons/io5";
import HeaderModal from "@/app/_components/HeaderModal/HeaderModal";
import LoginForm from "./LoginForm";

function HeaderRightSides() {
  const [wishList, setWishList] = useState(1);
  const [cart, setCart] = useState(4);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [modalPosition, setModalPosition] = useState({
    top: 0,
    right: 0,
    width: "100%",
  });
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (linkName, content, right = 0, width = "400px") => {
    if (activeLink === linkName && isModalVisible) {
      closeModal();
    } else {
      setModalContent(content);
      setModalPosition({
        top: 80,
        right: right,
        width: width,
      });
      setIsModalVisible(true);
      setActiveLink(linkName);
    }
  };

  const closeModal = () => {
    setActiveLink(null);
    setIsModalVisible(false);
  };

  return (
    <div className="text-md flex justify-end lg:text-lg xl:text-xl">
      {/* SEARCH MODAL */}
      <Link
        href="#"
        className={`menu-item flex h-full items-center border-b-2 px-3 transition-all duration-200 ease-in-out xl:px-4 ${
          activeLink === "Search" ? "border-stone-800" : "border-transparent"
        }`}
        onClick={() => handleLinkClick("Search", <p>Search form</p>, 0, "100%")}
      >
        <IoSearchOutline />
      </Link>
      {/* WISHLIST MODAL */}
      <Link
        href="#"
        className={`menu-item relative flex h-full items-center border-b-2 px-3 transition-all duration-200 ease-in-out xl:px-4 ${
          activeLink === "Wishlist" ? "border-stone-800" : "border-transparent"
        }`}
        onClick={() => handleLinkClick("Wishlist", <p>Wishlist form</p>, 140)}
      >
        <IoHeartOutline />
        {wishList > 0 && (
          <span className="absolute right-2 top-5 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-xs font-medium text-stone-50">
            {wishList}
          </span>
        )}
      </Link>
      {/* CART MODAL */}
      <Link
        href="#"
        className={`menu-item relative flex h-full items-center border-b-2 px-3 transition-all duration-200 ease-in-out xl:px-4 ${
          activeLink === "Cart" ? "border-stone-800" : "border-transparent"
        }`}
        onClick={() => handleLinkClick("Cart", <p>Cart form</p>, 90)}
      >
        <IoBagOutline />
        {cart > 0 && (
          <span className="absolute right-2 top-5 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-xs font-medium text-stone-50">
            {cart}
          </span>
        )}
      </Link>
      {/* LOGIN MODAL */}
      <Link
        href="#"
        className={`menu-item flex h-full items-center border-b-2 px-3 transition-all duration-200 ease-in-out xl:px-4 ${
          activeLink === "Login" ? "border-stone-800" : "border-transparent"
        }`}
        onClick={() =>
          handleLinkClick("Login", <LoginForm onClose={closeModal} />, 40)
        }
      >
        <IoPersonOutline />
      </Link>
      <HeaderModal
        isVisible={isModalVisible}
        onClose={closeModal}
        position={modalPosition}
        paddingX="px-8"
        paddingY="py-8"
        closeOnOutsideClick={true} // Enable outside click close
      >
        {modalContent}
      </HeaderModal>
    </div>
  );
}

export default HeaderRightSides;
