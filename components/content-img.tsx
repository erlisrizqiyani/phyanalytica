import React from "react";
import ContentTitle from "./content-title";
import clsx from "clsx";
import Button from "@/components/button";

interface ContentImgProps {
  topText: string;
  bottomText: string;
  highlightedWord: string;
  description: string;
  buttonText: string;
  imageUrl: string;
  reverse?: boolean;
  buttonHref?: string; // Optional buttonHref for later use
}

const ContentImg: React.FC<ContentImgProps> = ({
  topText,
  bottomText,
  highlightedWord,
  description,
  buttonText,
  imageUrl,
  reverse = false,
  buttonHref, // Optional buttonHref
}) => {
  return (
    <div
      className={clsx(
        "flex",
        "flex-col",
        { "md:flex-row": !reverse, "md:flex-row-reverse": reverse },
        "items-center",
        "my-2",
        "gap-10"
      )}
    >
      <div className="w-full md:w-1/2">
        <ContentTitle
          topText={topText}
          bottomText={bottomText}
          alignment="left"
          bottomTextSize="black48"
          highlightedWord={highlightedWord}
        />
        <p className="text-gray-600 my-4 mb-32 mr-2">{description}</p>
        <Button variant="text" color="violet" href={buttonHref}>
          {buttonText}
        </Button>
      </div>
      <div className="w-full md:w-1/2">
        <img
          src={imageUrl}
          alt={bottomText}
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default ContentImg;
