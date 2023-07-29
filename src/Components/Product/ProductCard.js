import React from "react";
import StarRating from "./StarRating";
import Link from "next/link";
import Image from "next/image";

const ProductCard = () => {
  return (
    <div class="w-full max-w-md mx-auto bg-white border border-gray-200 rounded-lg shadow">
      <Image
        className="rounded-t-lg mx-auto"
        src="https://www.cloud.ryanscomputers.com/cdn/products/medium/mi-curved-34-inch-wqhd-3440x1440-gaming-monitor-11602570977.webp"
        alt="product image"
        width={100}
        height={100}
        layout="responsive"
      />

      <div class="px-5 pb-5">
        <a href="#">
          <h5 class="text-xl font-semibold tracking-tight text-gray-900">
            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
          </h5>
        </a>
        <div class="grid grid-cols-1 md:grid-flow-col items-center gap-2 mt-2 mb-5">
          <div>
            <StarRating averageRating={2.3} />
          </div>
          <div className="flex justify-center gap-4 mt-2 md:mt-0">
            {/* <span className="bg-green-200 text-gray-900 text-xs font-semibold  px-2.5 py-0.5 rounded  mt-2 mb-5">
            In Stock
          </span> */}
            <span className="bg-red-200 text-gray-900 text-xs font-semibold  px-2.5 py-0.5 rounded ">
              Out of Stock
            </span>
            <span className="bg-yellow-200 text-gray-900 text-xs font-semibold  px-2.5 py-0.5 rounded ">
              Monitor
            </span>
          </div>
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
