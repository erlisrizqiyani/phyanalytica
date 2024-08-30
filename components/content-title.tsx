// components/ContentTitle.tsx
import React from "react";
import clsx from "clsx";
import { subtitle, title } from "@/components/primitives";
import "@/styles/globals.css";

interface ContentTitleProps {
  topText: string;
  bottomText: string;
  alignment: "left" | "center" | "right";
  bottomTextSize: "black48" | "semiBold40";
  highlightedWord?: string; // Optional prop for highlighting a word
}

const alignmentClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const ContentTitle: React.FC<ContentTitleProps> = ({
  topText,
  bottomText,
  alignment,
  bottomTextSize,
  highlightedWord, // Destructure highlightedWord
}) => {
  // Split bottomText by the highlightedWord
  const parts = highlightedWord
    ? bottomText.split(new RegExp(`(${highlightedWord})`, "gi"))
    : [bottomText];

  return (
    <div className={clsx("content-title", alignmentClasses[alignment])}>
      <h1 className={clsx(title({ color: "violet", size: "semiBold22" }))}>
        {topText}
      </h1>
      <br />
      <h1 className={clsx(subtitle({ color: "black", size: bottomTextSize }))}>
        {parts.map((part, index) =>
          part.toLowerCase() === highlightedWord?.toLowerCase() ? (
            <span key={index} className="text-violet-800">
              {part}
            </span>
          ) : (
            part
          )
        )}
      </h1>
    </div>
  );
};

export default ContentTitle;
