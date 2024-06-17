import { MdOutlineLocalShipping } from "react-icons/md";
import { PiMedal } from "react-icons/pi";
import { FiShield } from "react-icons/fi";

function TopBar() {
  return (
    <div className="hidden md:flex md:justify-between md:bg-stone-900 md:px-8 md:py-3 md:text-stone-50 lg:px-16 lg:py-3 xl:px-24 2xl:px-32">
      <div className="s flex items-center gap-4 text-base">
        <MdOutlineLocalShipping className="md:text-lg" />
        <span className="md:text-sm">FREE SHIPPING AND RETURNS</span>
      </div>
      <div className="flex items-center gap-4 text-base">
        <PiMedal className="md:text-lg" />
        <span className="md:text-sm">2 YEARS OF WARRANTY</span>
      </div>
      <div className="flex items-center gap-4 text-base">
        <FiShield className="md:text-lg" />
        <span className="md:text-sm">30 DAYS MONEYBACK GUARANTEE</span>
      </div>
    </div>
  );
}

export default TopBar;
