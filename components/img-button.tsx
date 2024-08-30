import React from "react";
import Button from "./button";

interface ImgButtonProps {
  imageSrc: string;
  title: string;
  buttonLabels: string[]; // Array of button texts
}

const ImgButton: React.FC<ImgButtonProps> = ({
  imageSrc,
  title,
  buttonLabels,
}) => {
  // Menentukan jumlah button yang ditampilkan berdasarkan ukuran layar
  const isSmallScreen = window.innerWidth <= 768;
  const visibleLabels = isSmallScreen ? buttonLabels.slice(0, 2) : buttonLabels;

  return (
    <div className="relative img-button-container">
      {/* Apply a dark overlay effect using opacity */}
      <div className="absolute inset-0 bg-black opacity-100 rounded-lg"></div>
      <img src={imageSrc} alt={title} className="w-full h-auto rounded-lg" style={{ opacity: 0.5 }} />
      <div className="absolute top-0 left-0 p-4 z-10">
        <h2 className="text-lg mb-4 text-white">{title}</h2>
      </div>
      <div className="absolute bottom-0 left-0 p-4 z-10">
        {visibleLabels.map((label, index) => (
          <Button
            key={index}
            variant="outlined"
            color="white"
          >
            {label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ImgButton;
