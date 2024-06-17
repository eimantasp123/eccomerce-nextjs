import { FaPlus, FaMinus } from "react-icons/fa6";

const Accordion = ({
  title,
  children,
  isOpen,
  onClick,
  border = "border-t-[1px]",
  paddingLeft = "pl-0",
  paddingLeftContent = "pl-0",
}) => {
  return (
    <div className={`flex flex-col ${paddingLeft} ${border}`}>
      <div onClick={onClick} className="flex justify-between">
        <div className="cursor-pointer py-4">{title}</div>
        <button className="text-xs">{isOpen ? <FaMinus /> : <FaPlus />}</button>
      </div>
      <div
        className={`flex flex-col ${paddingLeftContent} overflow-hidden text-sm transition-all duration-700 ease-in-out ${isOpen ? "max-h-[2000px]" : "max-h-0"}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
