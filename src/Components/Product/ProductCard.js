import React from "react";
import StarRating from "./StarRating";
import Link from "next/link";
import Image from "next/image";

const ProductCard = ({ product }) => {
  return (
    <div className="w-full max-w-md mx-auto bg-white border border-gray-200 rounded-lg shadow">
      <Image
        className="rounded-t-lg mx-auto"
        src={product.Image}
        width={100}
        height={100}
        alt="Product Image"
        layout="responsive"
      />

      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900">
            {product["Product Name"]}
          </h5>
        </a>
        <div className="grid grid-cols-1 md:grid-flow-col items-center gap-2 mt-2 mb-5">
          <div>
            <StarRating averageRating={product["Average Rating"]} />
          </div>
          <div className="flex justify-center items-center gap-4 mt-2 md:mt-0">
            {product.Status === "In Stock" && (
              <span className="bg-green-200 text-gray-900 text-xs font-semibold  px-2.5 py-0.5 rounded ">
                In Stock
              </span>
            )}
            {product.Status === "Out of Stock" && (
              <span className="bg-red-200 text-gray-900 text-xs font-semibold  px-2.5 py-0.5 rounded ">
                Out of Stock
              </span>
            )}
            <span className="bg-yellow-200 text-gray-900 text-xs font-semibold  px-2.5 py-0.5 rounded ">
              {product.Category}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900">
            ${product.Price}
          </span>
          <Link
            href={`/product/${product._id}`}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
