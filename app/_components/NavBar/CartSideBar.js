"use client";

import { useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import { MdDomainVerification } from "react-icons/md";

export default function CartSideBar() {
  const [cartItems, setCartItems] = useState(5);
  const [total, setTotal] = useState(0);

  return (
    <div className="flex h-full w-full flex-col">
      <h2 className="mb-6 text-lg">
        Your cart <span>({`${cartItems} items`})</span>
      </h2>
      <div className="custom-scrollbar mb-10 flex flex-col gap-6 py-10">
        <CartSideBarCard setTotal={setTotal} />
        <CartSideBarCard setTotal={setTotal} />
        <CartSideBarCard setTotal={setTotal} />
        <CartSideBarCard setTotal={setTotal} />
        <CartSideBarCard setTotal={setTotal} />
      </div>

      <div className="mt-auto">
        <div className="mb-7 flex">
          <div className="flex flex-col">
            <h3 className="mb-2 text-lg">Subtotal</h3>
            <p className="text-sm text-gray-600">
              Shipping, taxes and discount calculated at checkout.
            </p>
          </div>
          <span className="ml-auto text-lg">${total}</span>
        </div>
        <button className="mb-3 w-full bg-stone-800 py-3 text-base text-stone-50">
          Go to checkout
        </button>
        <button className="my-6 mt-auto w-full border-[1px] border-stone-800 py-3 text-base text-stone-800">
          View my cart
        </button>
      </div>
    </div>
  );
}

function CartSideBarCard({ setTotal }) {
  const [item, setItems] = useState(1);
  const [price, setPrice] = useState(146);

  return (
    <>
      <div className="mx-2 flex h-[90px] select-none gap-3 sm:gap-6">
        <div className="flex items-center gap-2">
          <img
            src="/640x800.png"
            alt="Product"
            className="h-full max-w-20 object-cover"
          />
        </div>
        <div className="flex flex-col items-start">
          <h3 className="font-regular text-base">Product Name with</h3>
          <p className="text-sm text-gray-600">{`$${price}`}</p>
          <span className="mt-4 flex items-center justify-center gap-3 rounded-full border-[1px] px-3 py-1 text-sm text-stone-900 shadow-sm">
            <span
              onClick={() => {
                setItems((item) => (item > 0 ? item - 1 : item));
                setTotal((total) => total - price);
              }}
              className="text-[11px]"
            >
              <AiOutlineMinus />
            </span>
            {item}
            <span
              onClick={() => {
                setItems((item) => item + 1);
                setTotal((total) => total + price);
              }}
              className="text-[11px]"
            >
              <AiOutlinePlus />
            </span>
          </span>
        </div>
        <div className="ml-auto flex flex-col justify-between">
          <span className="flex cursor-pointer justify-end text-xl text-gray-700 hover:text-gray-800">
            <IoCloseOutline />
          </span>
          <span className="text-base">{`$${item * price}`}</span>
        </div>
      </div>
      <div className="border-b-[1px]"></div>
    </>
  );
}
