
import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';  // For swipe gestures

const Flippings = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const contents = [
    "Content 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Content 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "GOOOD",
    "Content 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Content 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Content 6. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  ];

  // Swipe event handler
  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrevious(),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % contents.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + contents.length) % contents.length);
  };

  // Manually set the current slide based on the dot clicked
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div {...handlers} className="m-5 rounded-md mb-10 py-6 text-black  bg-blue-100">
      <p className="text-lg font-bold mb-3">What Our Clients Say</p>
      <p className="text-lg font-bold mb-3">Client Review</p>

      <div className="">
        {contents.slice(currentIndex, currentIndex + 1).map((content, index) => (
          <div
            key={index}
            className=" bg-blue-100 p-6 rounded shadow-md transition-opacity duration-500 ease-in-out"
          >
            {content}
          </div>
        ))}
      </div>

      {/* Dots for navigation */}
      <div className="flex justify-center mt-5">
        {contents.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full mx-1 cursor-pointer ${
              index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Flippings;