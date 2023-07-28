import React from "react";

const StarRating = ({ averageRating }) => {
  // Function to generate stars based on the rating
  const generateStars = (rating) => {
    const filledStarIcon = (
      <svg
        class="w-4 h-4 text-yellow-300 mr-1"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
    );

    const unfilledStarIcon = (
      <svg
        class="w-4 h-4 text-gray-200 "
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
    );

    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(filledStarIcon);
      } else {
        stars.push(unfilledStarIcon);
      }
    }

    return stars;
  };

  return (
    <div className="flex w-3/5 md:w-full mx-auto justify-evenly md:justify-normal items-center ">
      {/* Call the generateStars function to display the stars */}
      {generateStars(averageRating)}

      {/* Display the average rating */}
      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ml-2">
        {averageRating.toFixed(1)}
      </span>
    </div>
  );
};

export default StarRating;