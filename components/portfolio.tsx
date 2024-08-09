import React from "react";
import Button from "@/components/button";

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  buttonText: string;
  onClick: () => void; // Add onClick prop for the button
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  title,
  description,
  buttonText,
  onClick,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col justify-between">
      <div className="relative overflow-hidden h-60"> {/* Set a fixed height for the image container */}
        <img
          className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
          src={imageSrc}
          alt={title}
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div> {/* Overlay */}
      </div>
      <div className="px-6 py-4 flex-grow">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4 mt-auto flex justify-end">
        <Button variant="text" color="violet" onClick={onClick}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default Card;
