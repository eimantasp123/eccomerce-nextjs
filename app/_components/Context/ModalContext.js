"use client";

import React, { createContext, useState, useContext, useRef } from "react";

const ModalContext = createContext();

export const useModal = () => {
  return useContext(ModalContext);
};

export const ModalProvider = ({ children }) => {
  const [menuModalOpen, setMenuModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [cartModalOpen, setCartModalOpen] = useState(false);
  const [accountModalOpen, setAccountModalOpen] = useState(false);
  const [wishlistModalOpen, setWishlistModalOpen] = useState(false);
  return (
    <ModalContext.Provider
      value={{
        menuModalOpen,
        searchModalOpen,
        cartModalOpen,
        accountModalOpen,
        wishlistModalOpen,
        openMenuModal: () => setMenuModalOpen(true),
        closeMenuModal: () => setMenuModalOpen(false),
        openSearchModal: () => setSearchModalOpen(true),
        closeSearchModal: () => setSearchModalOpen(false),
        openCartModal: () => setCartModalOpen(true),
        closeCartModal: () => setCartModalOpen(false),
        openAccountModal: () => setAccountModalOpen(true),
        closeAccountModal: () => setAccountModalOpen(false),
        openWishlistModal: () => setWishlistModalOpen(true),
        closeWishlistModal: () => setWishlistModalOpen(false),
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
