// components/ContentGrid.tsx
import React from "react";
import ContentTitle from "./content-title";
import { subtitle } from "@/components/primitives";

interface ContentItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ContentGridProps {
  topText: string;
  bottomText: string;
  highlightedWord: string; // Add highlightedWord prop
  items: ContentItemProps[];
}

const ContentItem: React.FC<ContentItemProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 p-2 bg-[#EFF3FD] rounded-full">
        {/* Pastikan ikon menggunakan warna violet */}
        <div className="text-violet-800">{icon}</div>
      </div>
      <div>
        <h3 className={subtitle({ color: "black", size: "semiBold24" })}>
          {title}
        </h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const ContentGrid: React.FC<ContentGridProps> = ({
  topText,
  bottomText,
  highlightedWord, // Destructure highlightedWord
  items,
}) => {
  return (
    <div className="container mx-auto p-4">
      <ContentTitle
        topText={topText}
        bottomText={bottomText}
        alignment="center"
        bottomTextSize="black48"
        highlightedWord={highlightedWord} // Pass highlightedWord to ContentTitle
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
        {items.slice(0, 4).map((item, index) => (
          <ContentItem key={index} {...item} />
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {items.slice(4).map((item, index) => (
          <ContentItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ContentGrid;
