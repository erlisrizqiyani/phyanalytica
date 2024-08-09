import React from 'react';

interface ScrollableArticleProps {
  title: string;
  content: string;
  imageSrc: string;
}

const ScrollableArticle: React.FC<ScrollableArticleProps> = ({ title, content, imageSrc }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-4 border border-gray-300 rounded-lg">
      <div className="md:w-1/2">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p>{content}</p>
      </div>
      <div className="md:w-1/2 relative">
        <div className="sticky top-0 overflow-y-scroll h-80">
          <img src={imageSrc} alt={title} className="w-full h-full object-cover rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default ScrollableArticle;
