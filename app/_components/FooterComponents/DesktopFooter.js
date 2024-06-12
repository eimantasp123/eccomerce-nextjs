"use client";

import Link from "next/link";
import {
  fotterBottom,
  fotterTopAbout,
  fotterTopHelp,
  fotterTopServices,
} from "./FooterLinks";
import FooterSection from "./FooterSection";
import FollowUsSection from "./FollowUsSection";
import { useState } from "react";
import FollowUsToggle from "./FollowUs";

function DesktopFooter() {
  const [openFollowUsSection, setOpenFollowUsSection] = useState(false);

  function handleSetOpenFollowSection() {
    console.log("click");
    setOpenFollowUsSection(!openFollowUsSection);
  }

  return (
    <div className="flex w-full flex-col">
      {/* Footer TOP */}
      <div className="flex gap-16 px-12 py-12 xl:px-20">
        {/* TOP left */}
        <FooterSection list={fotterTopHelp} label="HELP">
          A Client Advisor is available at +31 207 219 441 . You can also chat
          or email us
        </FooterSection>
        {/* TOP left - 2 */}
        <FooterSection list={fotterTopServices} label="SERVICES" />
        {/* TOP right-2 */}
        <FooterSection list={fotterTopAbout} label="ABOUT SHOPY" />
        {/* TOP right */}
        <FollowUsToggle handleFollow={handleSetOpenFollowSection} />
      </div>

      {/* Footer FOLLOW US */}

      <FollowUsSection
        isVisible={openFollowUsSection}
        handleFollow={handleSetOpenFollowSection}
      />

      {/* Footer BOTTOM */}
      <div className="flex items-center justify-between border-t-[1px] border-stone-300 px-12 py-12 xl:px-20">
        <Link href="#" className="flex-1">
          Ship to: LT Lithuania
        </Link>
        <Link
          href="/"
          className="flex flex-1 justify-center text-2xl font-bold tracking-wide"
        >
          SHOPY
        </Link>
        <ul className="flex flex-1 justify-end gap-4">
          {fotterBottom.map((el) => (
            <li key={el.label}>
              <Link href={el.link}>{el.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DesktopFooter;
