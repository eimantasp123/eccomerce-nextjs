import { FaPlus, FaMinus } from "react-icons/fa6";

const Accordion = ({ title, children, isOpen, onClick }) => {
  return (
    <div className="flex flex-col border-t-[1px]">
      <div onClick={onClick} className="flex justify-between">
        <div className="cursor-pointer py-4">{title}</div>
        <button className="text-xs">{isOpen ? <FaMinus /> : <FaPlus />}</button>
      </div>
      <div
        className={`flex flex-col overflow-hidden text-sm transition-all duration-700 ease-in-out ${isOpen ? "max-h-screen" : "max-h-0"}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
