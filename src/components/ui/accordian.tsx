import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordianProps {
  title: string;
  content: string;
}

const Accordion: React.FC<AccordianProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false); // State to manage visibility

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev); // Toggle the state
  };

  return (
    <div className="parent md:max-w-[360px]">
      <div
        className="flex items-center pt-3 gap-5 border-b border-gray-600 cursor-pointer"
        onClick={toggleAccordion} // Attach click handler
      >
        <h1 className="text-lg font-semibold pb-2">{title}</h1>
        <div className="w-[24px] h-[24px]">
          <ChevronDown
            className={`transform transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>
      <div className={`accord pt-1 ${isOpen ? "" : "hidden"}`}>
        <p className="text-sm mt-2">{content}</p>
      </div>
    </div>
  );
};

export default Accordion;
