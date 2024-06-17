"use client";

import React, { useEffect, useState } from "react";

const Modal = ({
  isOpen,
  onClose,
  children,
  position,
  width = "w-96",
  height = "auto",
  additionalClasses = "",
  additionalStylesButton = "",
}) => {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const disableBodyScroll = () => {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    };

    const enableBodyScroll = () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };

    if (isOpen) {
      disableBodyScroll();
      document.addEventListener("keydown", handleEscape);
    } else {
      document.removeEventListener("keydown", handleEscape);
    }

    return () => {
      enableBodyScroll();
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`fixed inset-0 z-50 flex bg-black bg-opacity-60 transition-all duration-500 ease-in-out ${
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      }`}
      onClick={onClose}
    >
      <div
        className={`fixed transform bg-white transition-transform duration-500 ease-in-out ${width} ${height} ${additionalClasses} ${
          isOpen
            ? getModalPositionOpen(position)
            : getModalPositionClose(position)
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={`absolute text-gray-500 hover:text-gray-700 ${additionalStylesButton} `}
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

const getModalPositionOpen = (position) => {
  switch (position) {
    case "left":
      return "translate-x-0 left-0";
    case "right":
      return "translate-x-0 right-0 ";
    case "top":
      return "translate-y-0 top-0";
    default:
      return "translate-x-0";
  }
};

const getModalPositionClose = (position) => {
  switch (position) {
    case "left":
      return `-translate-x-full left-0`;
    case "right":
      return "translate-x-full right-0";
    case "top":
      return "-translate-y-full top-0";
    default:
      return "-translate-x-full";
  }
};

export default Modal;
