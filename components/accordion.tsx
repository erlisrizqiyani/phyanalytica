import React, { useState } from "react";

interface AccordionItem {
  title: string;
  content: string[];
}

interface ProcessAccordionProps {
  items: AccordionItem[];
  position?: "left" | "right"; // For accordion position
  title: string; // Title prop
  description: string; // Description prop
  textPosition?: "left" | "right"; // For title and description position
}

const ProcessAccordion: React.FC<ProcessAccordionProps> = ({
  items,
  position = "right",
  title,
  description,
  textPosition = "left",
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleKeyDown = (index: number, event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      toggleAccordion(index);
    }
  };

  return (
    <div
      className={`bg-white text-gray-900 p-6 rounded-lg flex ${
        textPosition === "right" ? "flex-row-reverse" : "flex-row"
      } ${position === "left" ? "order-first" : ""}`}
    >
      <div
        className={`flex-1 ${textPosition === "left" ? "pr-6" : "pl-6"} py-4`}
      >
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
      <div className="flex-1">
        {items.map((item, index) => (
          <div
            key={index}
            className={`border-b border-gray-700 ${
              activeIndex === index ? "bg-white" : ""
            }`}
          >
            <div
              className={`flex justify-between items-center cursor-pointer py-4 ${
                activeIndex === index ? "text-purple-600" : "text-gray-900"
              }`}
              onClick={() => toggleAccordion(index)}
              onKeyDown={(event) => handleKeyDown(index, event)}
              role="button"
              tabIndex={0} // Makes the div focusable for keyboard users
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <span>{activeIndex === index ? "−" : "+"}</span>
            </div>
            {activeIndex === index && (
              <div className="py-2 text-gray-700 space-y-2">
                {item.content.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessAccordion;
