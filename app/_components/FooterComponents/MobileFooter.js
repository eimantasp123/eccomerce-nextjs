"use client";

import Link from "next/link";
import {
  fotterBottom,
  fotterTopAbout,
  fotterTopHelp,
  fotterTopServices,
} from "./FooterLinks";
import { useState } from "react";
import FooterSection from "./FooterSection";
import Accordion from "./Accordion";
import FollowUsIcons from "./FollowUsIcons";

const footerConent = [
  {
    title: "Help",
    content: (
      <FooterSection list={fotterTopHelp}>
        A Client Advisor is available at +31 207 219 441 . You can also chat or
        email us
      </FooterSection>
    ),
  },
  {
    title: "Services",
    content: <FooterSection list={fotterTopServices} />,
  },
  {
    title: "About Shopy",
    content: <FooterSection list={fotterTopAbout} />,
  },
  {
    title: "Connect",
    content: (
      <>
        <div className="text-md flex flex-col items-center justify-center gap-4 pb-6">
          <p>Follow Us</p>
          <FollowUsIcons size="text-lg" gap="gap-5" />
        </div>
      </>
    ),
  },
];

function MobileFooter() {
  const [openIndex, setOpenIndex] = useState(null);

  function handleAccordionClick(index) {
    setOpenIndex(openIndex === index ? null : index);
  }
  return (
    <div className="flex flex-col gap-8">
      <Link
        href="/"
        className="mt-8 flex flex-1 justify-center text-2xl font-bold tracking-wide"
      >
        SHOPY
      </Link>
      {/* Footer ACCORDION */}
      <div className="flex w-full flex-col border-b-[1px] px-5 sm:px-12">
        {footerConent.map((faq, index) => (
          <Accordion
            title={faq.title}
            key={index}
            isOpen={openIndex === index}
            onClick={() => handleAccordionClick(index)}
          >
            {faq.content}
          </Accordion>
        ))}
      </div>

      {/* Footer BOTTOM */}
      <div className="mb-8 flex flex-col items-center justify-center">
        <ul className="mb-4 mt-4 flex gap-4">
          {fotterBottom.map((el) => (
            <li key={el.label}>
              <Link href={el.link}>{el.label}</Link>
            </li>
          ))}
        </ul>
        <Link href="#" className="flex-1">
          Ship to: LT Lithuania
        </Link>
      </div>
    </div>
  );
}

export default MobileFooter;
