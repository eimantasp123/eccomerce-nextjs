"use client";

import { useState } from "react";
import {
  IoBagOutline,
  IoCartOutline,
  IoHeartOutline,
  IoPersonOutline,
} from "react-icons/io5";
import Modal from "../Modal";
import { useModal } from "../Context/ModalContext";
import LoginForm from "./LoginForm";
import Wishlist from "../Wishlist";
import CartSideBar from "./CartSideBar";

function HeaderRightSideIcons() {
  const [wishList, setWishList] = useState(1);
  const [cart, setCart] = useState(1);
  const { accountModalOpen, openAccountModal, closeAccountModal } = useModal();
  const { wishlistModalOpen, openWishlistModal, closeWishlistModal } =
    useModal();
  const { cartModalOpen, openCartModal, closeCartModal } = useModal();

  return (
    <div className="flex justify-end gap-4 text-xl lg:text-lg xl:gap-5 xl:text-xl">
      <button onClick={openAccountModal}>
        <IoPersonOutline />
      </button>

      <button className="relative" onClick={openWishlistModal}>
        <IoHeartOutline />
        {wishList > 0 && (
          <span className="absolute right-[-5px] top-[-5px] flex h-[7px] w-[7px] items-center justify-center rounded-full bg-red-800 text-xs font-medium text-stone-50"></span>
        )}
      </button>

      <button className="relative" onClick={openCartModal}>
        <IoBagOutline />
        {cart > 0 && (
          <span className="absolute right-[-10px] top-[-9px] flex h-[15px] w-[15px] items-center justify-center rounded-full bg-stone-800 text-xs font-medium text-stone-50">
            {cart}
          </span>
        )}
      </button>

      <Modal
        isOpen={accountModalOpen}
        onClose={closeAccountModal}
        position="right"
        width="w-full sm:w-4/6 md:w-3/6 lg:w-3/6 xl:w-2/6 2xl:w-2/6 md:px-2 px-8"
        height="h-full"
        additionalStylesButton="top-5 right-6 text-2xl text-stone-800"
      >
        <div className="flex h-full flex-col items-center pt-20 lg:pt-28">
          <h2 className="mb-2 text-center text-2xl font-bold tracking-wide md:text-2xl lg:text-2xl">
            Welcome back!
          </h2>
          <p className="mb-10 flex justify-center gap-2 text-sm md:text-[15px]">
            Don&apos;t have account yet?
            <span className="cursor-pointer font-bold underline">Register</span>
          </p>
          <LoginForm />
        </div>
      </Modal>

      <Modal
        isOpen={wishlistModalOpen}
        onClose={closeWishlistModal}
        position="right"
        width="w-full sm:w-5/6 md:w-4/6 lg:w-4/6 xl:w-3/6 2xl:w-2/5 md:px-2 px-8"
        height="h-full"
        additionalStylesButton="top-5 right-6 text-2xl text-stone-800"
      >
        <div className="flex h-full flex-col px-4 pt-7 md:px-12">
          {wishList > 0 ? (
            <Wishlist />
          ) : (
            <div className="flex min-w-72 flex-col items-center gap-2 pt-10">
              <h3 className="text-4xl font-semibold">
                <IoHeartOutline />
              </h3>
              <p className="text-base text-gray-800">
                Your wishlist is currenty empty!
              </p>
            </div>
          )}
        </div>
      </Modal>

      <Modal
        isOpen={cartModalOpen}
        onClose={closeCartModal}
        position="right"
        width="w-full sm:w-5/6 md:w-4/6 lg:w-4/6 xl:w-3/6 2xl:w-2/5 md:px-2 px-8"
        height="h-full"
        additionalStylesButton="top-5 right-6 text-2xl text-stone-800"
      >
        <div className="flex h-full flex-col px-4 pt-7 md:px-12">
          {cart > 0 ? (
            <CartSideBar />
          ) : (
            <div className="flex min-w-[300px] flex-col items-center gap-2 px-8 pt-10">
              <h3 className="text-4xl font-semibold">
                <IoCartOutline />
              </h3>
              <p className="text-base text-gray-800">
                Your cart is currenty empty!
              </p>
              <button className="mt-6 w-full rounded-md bg-stone-800 py-3 text-base text-stone-50">
                Start shopping
              </button>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
}

export default HeaderRightSideIcons;
