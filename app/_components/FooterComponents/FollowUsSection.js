"use client";
import { IoMdClose } from "react-icons/io";
import { useEffect, useRef } from "react";
import FollowUsIcons from "./FollowUsIcons";

function FollowUsSection({ handleFollow, isVisible }) {
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      if (isVisible) {
        window.scrollTo({
          top: document.documentElement.scrollHeight - window.innerHeight + 200,
          behavior: "smooth",
        });
        contentRef.current.classList.remove("h-0", "border-t-[0px]");
        contentRef.current.classList.add("h-[140px]", "border-t-[1px]");
      } else {
        contentRef.current.classList.add("border-t-[0px]", "h-0");
        contentRef.current.classList.remove("h-[140px]", "border-t-[1px]");
      }
    }
  }, [isVisible]);

  return (
    <div
      ref={contentRef}
      className={`opacity-1 relative flex h-0 flex-col items-center justify-center gap-7 overflow-hidden border-stone-300 transition-all duration-700 ease-in-out`}
    >
      <span className="text-lg tracking-wide">Follow Us</span>
      <FollowUsIcons />
      <span className="absolute right-8 top-5 text-xl">
        <IoMdClose onClick={handleFollow} className="cursor-pointer" />
      </span>
    </div>
  );
}

export default FollowUsSection;
