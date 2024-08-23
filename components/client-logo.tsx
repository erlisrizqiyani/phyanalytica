"use client";
import React from "react";
import { useEffect, useRef } from 'react';
// import "@/styles/ClientLogos.css"; // This will import the CSS for styling

const logos = [
  "/logoclient1.png", 
  "/logoclient2.png",
  "/logoclient1.png",
  "/logoclient2.png",
  "/logoclient1.png",
  "/logoclient2.png",
];

const ClientLogos = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollSpeed = 1; // Kecepatan scroll
    let requestId: number;

    const scrollLogos = () => {
      scrollContainer.scrollLeft += scrollSpeed;

      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      }

      requestId = requestAnimationFrame(scrollLogos);
    };

    scrollLogos();

    return () => cancelAnimationFrame(requestId);
  }, []);

  // Duplikasi logo agar terlihat banyak di layar
  const logos = new Array(10).fill(null).map((_, index) => (
    <div key={index} className="flex-shrink-0">
      <img
        src={`/logoclient${index % 2 === 0 ? '1' : '2'}.png`}
        alt={`Logo ${index % 2 === 0 ? '1' : '2'}`}
        className="w-[100px] h-[60px] mr-4"
      />
    </div>
  ));

  return (
    <div ref={scrollContainerRef} className="flex overflow-hidden whitespace-nowrap w-full">
      {logos}
      {logos}
    </div>
  );
};
export default ClientLogos;
