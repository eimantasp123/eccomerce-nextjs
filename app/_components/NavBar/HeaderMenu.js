"use client";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import Modal from "../Modal";
import { useModal } from "../Context/ModalContext";
import SearchBarModal from "./SearchBarModal";
import MenuSidebarContent from "./MenuSidebarContent";

function HeaderMenu() {
  const {
    menuModalOpen,
    searchModalOpen,
    openMenuModal,
    closeMenuModal,
    openSearchModal,
    closeSearchModal,
  } = useModal();

  return (
    <>
      <div className="flex flex-1 justify-start gap-4 text-xl font-medium">
        <button
          className="flex h-full items-center gap-3"
          onClick={openMenuModal}
        >
          <AiOutlineMenu />
          <span className="hidden text-sm md:block">Menu</span>
        </button>

        <button
          onClick={openSearchModal}
          className="flex h-full items-center gap-3"
        >
          <IoSearchOutline />
          <span className="hidden text-sm md:block">Search</span>
        </button>
      </div>

      <Modal
        isOpen={menuModalOpen}
        onClose={closeMenuModal}
        position="left"
        width="w-full sm:w-2/3 md:w-3/5 lg:w-1/3 md:px-2 px-8"
        height="h-full"
        additionalStylesButton="top-5 right-6 text-2xl text-stone-800"
      >
        <div className="flex h-full flex-col px-4 pt-7 md:px-12">
          <MenuSidebarContent />
        </div>
      </Modal>

      <Modal
        isOpen={searchModalOpen}
        onClose={closeSearchModal}
        position="top"
        width="w-full"
        height="h-auto"
        additionalStylesButton="top-2 right-3 md:top-5 md:right-6 text-2xl text-stone-800"
      >
        <SearchBarModal />
      </Modal>
    </>
  );
}

export default HeaderMenu;
