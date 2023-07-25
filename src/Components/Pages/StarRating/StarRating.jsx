import React, { useState } from 'react';

const StarRating = ({ rating, onChange }) => {
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleStarClick = (clickedRating) => {
    onChange(clickedRating);
  };

  const handleStarHover = (hoveredRating) => {
    setHoveredRating(hoveredRating);
  };

  const renderStar = (filled, index) => {
    const currentStarRating = index + 1;

    const handleStarClickWithRating = () => {
      handleStarClick(currentStarRating);
    };

    const handleStarHoverWithRating = () => {
      handleStarHover(currentStarRating);
    };

    return (
      <span
        key={index}
        className={`${
          filled ? 'text-yellow-500' : 'text-gray-400'
        } inline-block w-5 h-5 cursor-pointer`}
        onClick={handleStarClickWithRating}
        onMouseEnter={handleStarHoverWithRating}
        onMouseLeave={() => handleStarHover(0)}
      >
        {filled ? (
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M10 0l2.447 6.764H20l-5.684 4.358L15.447 20 10 15.601 4.553 20l1.131-8.878L0 6.764h7.553L10 0z"
              fillRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
        )}
      </span>
    );
  };

  return (
    <div className="flex items-center mt-[20px] mb-[10px]">
      {[...Array(5)].map((_, index) => {
        const currentStarRating = index + 1;
        const filled = currentStarRating <= (hoveredRating || rating);

        return renderStar(filled, index);
      })}
    </div>
  );
};

export default StarRating;
