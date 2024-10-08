"use client";

import React, { useState } from "react";
import {
  FaMinus,
  FaDatabase,
  FaChartPie,
  FaCogs,
  FaMagic,
  FaShieldAlt,
  FaTools,
  FaClipboardCheck,
  FaPlus,
} from "react-icons/fa";
import clsx from "clsx";

interface FAQItem {
  title: string;
  content: string | string[];
  icon: React.ReactNode;
}

interface FAQProps {
  faqs: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 max-w-3xl mx-auto">
      {faqs.map((item, index) => (
        <div key={index} className="border-b border-gray-200">
          <div
            role="button"
            tabIndex={0}
            className="flex justify-between items-center p-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
            onKeyPress={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                toggleFAQ(index);
              }
            }}
          >
            <div className="flex items-center">
              <div className="w-8 h-8 flex items-center justify-center bg-purple-100 text-purple-600 rounded-full mr-4">
                {item.icon}
              </div>
              <h2 className="text-lg font-semibold">{item.title}</h2>
            </div>
            <div className="text-purple-600">
              {openIndex === index ? <FaMinus /> : <FaPlus />}
            </div>
          </div>
          <div
            className={clsx(
              "overflow-hidden transition-all duration-300",
              openIndex === index ? "max-h-screen" : "max-h-0"
            )}
          >
            {typeof item.content === "string" ? (
              <p className="p-4 text-gray-600">{item.content}</p>
            ) : (
              <ul className="p-4 text-gray-600 list-disc list-inside">
                {item.content.map((service, i) => (
                  <li key={i}>{service}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
