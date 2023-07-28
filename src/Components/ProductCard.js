import React from "react";
import StarRating from "./StarRating";

const ProductCard = () => {
  return (
    <div class="w-full max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow">
      <a href="#">
        <img
          class="rounded-t-lg"
          src="https://www.cloud.ryanscomputers.com/cdn/products/medium/mi-curved-34-inch-wqhd-3440x1440-gaming-monitor-11602570977.webp"
          alt="product image"
        />
      </a>
      <div class="px-5 pb-5">
        <a href="#">
          <h5 class="text-xl font-semibold tracking-tight text-gray-900">
            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
          </h5>
        </a>
        <div class="flex items-center mt-2.5 mb-5">
          <StarRating averageRating={2.3} />
          <span className="bg-green-200 text-gray-900 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3 mt-2.5 mb-5">
            In Stock
          </span>
          {/* <span className="bg-red-200 text-gray-900 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3 mt-2.5 mb-5">
            Out of Stock
          </span> */}
          <span className="bg-yellow-200 text-gray-900 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3 mt-2.5 mb-5">
            Monitor
          </span>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-3xl font-bold text-gray-900">$599</span>
          <a
            href="#"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
