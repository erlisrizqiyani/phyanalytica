"use client";
import React from "react";
import "@/styles/globals.css"; // Impor CSS untuk styling

const logos = [
  "/logoclient1.png", 
  "/logoclient2.png",
  "/logoclient1.png",
  "/logoclient2.png",
  "/logoclient1.png",
  "/logoclient2.png",
];

const ClientLogos = () => {
  // Duplikasi logo agar terlihat banyak di layar
  const logoElements = logos.map((logo, index) => (
    <div key={index} className="flex-shrink-0">
      <img
        src={logo}
        alt={`Logo ${index}`}
        className="w-[100px] h-[60px] mr-4"
      />
    </div>
  ));

  return (
    <div className="scroll-container">
      {logoElements}
      {logoElements} {/* Duplicates for continuous scrolling effect */}
    </div>
  );
};

export default ClientLogos;
