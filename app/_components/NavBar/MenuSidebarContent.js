"use client";

import { useEffect, useState } from "react";
import Accordion from "../FooterComponents/Accordion";
import FooterSection from "../FooterComponents/FooterSection";
import { megaMenu } from "./MegaMenuContent/MegaMenuJSON";
import { useModal } from "../Context/ModalContext";

export default function MenuSidebarContent() {
  const [openIndex, setOpenIndex] = useState(null);
  const [openSubIndexes, setOpenSubIndexes] = useState({});
  const { menuModalOpen } = useModal();

  function handleAccordionClick(index) {
    setOpenIndex((prevIndex) => {
      if (prevIndex === index) {
        return null;
      } else {
        setOpenSubIndexes({});
        return index;
      }
    });
  }

  function handleSubAccordionClick(mainIndex, subIndex) {
    setOpenSubIndexes((prev) => ({
      ...prev,
      [mainIndex]: {
        ...prev[mainIndex],
        [subIndex]: !prev[mainIndex]?.[subIndex],
      },
    }));
  }

  useEffect(() => {
    if (!menuModalOpen) {
      setOpenIndex(null);
      setOpenSubIndexes({});
    }
  }, [menuModalOpen]);

  return (
    <div className="flex h-full flex-col">
      <h2 className="mb-6 text-lg font-bold">Menu</h2>
      <div className="custom-scrollbar mb-10 flex flex-1 flex-col gap-6 overflow-auto py-10">
        {megaMenu.map((el, index) => (
          <Accordion
            title={el.title}
            key={index}
            paddingLeft="pl-0 font-bold text-base"
            isOpen={openIndex === index}
            onClick={() => handleAccordionClick(index)}
            border="border-none"
          >
            {el.submenu.map((list, subIndex) => (
              <Accordion
                key={subIndex}
                title={list.category}
                paddingLeft="pl-2 font-medium"
                isOpen={!!openSubIndexes[index]?.[subIndex]}
                onClick={() => handleSubAccordionClick(index, subIndex)}
              >
                <FooterSection
                  linkSize="text-sm"
                  paddingLeft="pl-2"
                  list={list.colection}
                />
              </Accordion>
            ))}
          </Accordion>
        ))}
      </div>

      <div className="mb-5 mt-auto flex items-start justify-center gap-3 border-t-[1px] pt-5 text-sm">
        <button className="">About Us</button>
        <button className="">Contact Us</button>
        <button className="">FAQ</button>
      </div>
    </div>
  );
}
