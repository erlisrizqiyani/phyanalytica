import React from "react";
import ContentTitle from "./content-title";
import "@/styles/globals.css";

interface ContentCardProps {
  topText: string;
  bottomText: string;
  alignment: "left" | "center" | "right";
  imageSrc: string;
  description: string;
  highlightedWord?: string; // Added highlightedWord prop
}

const ContentCard: React.FC<ContentCardProps> = ({
  topText,
  bottomText,
  alignment,
  imageSrc,
  description,
  highlightedWord, // Destructure highlightedWord
}) => {
  return (
    <div className="max-w-sm overflow-hidden flex flex-col justify-between h-full">
      <ContentTitle
        topText={topText}
        bottomText={bottomText}
        alignment={alignment}
        bottomTextSize="semiBold40"
        highlightedWord={highlightedWord} // Pass highlightedWord to ContentTitle
      />
      <div className="mt-auto">
        <img
          className="w-full h-64 object-cover rounded-[10px] mt-4"
          src={imageSrc}
          alt={bottomText}
        />
        <div className="h-60 px-6 py-4 bg-gray-200 rounded-[10px] mt-4">
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
