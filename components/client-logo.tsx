import React from "react";
import "@/styles/ClientLogos.css"; // This will import the CSS for styling

const logos = [
  "/logoclient1.jpg", 
  "/logoclient2.jpg",
  "/logoclient1.jpg",
  "/logoclient2.jpg",
  "/logoclient1.jpg",
  "/logoclient2.jpg",
];

const ClientLogos = () => {
  // Duplicate the logos array to create a continuous scroll
  const allLogos = [...logos, ...logos];
  
  return (
    <div className="client-logos-container">
      <div className="scrolling-wrapper">
        {allLogos.map((logo, index) => (
          <div key={index} className="logo">
            <img src={logo} alt={`Logo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientLogos;
