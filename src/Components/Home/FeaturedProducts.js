import React from "react";
import ProductCard from "../Product/ProductCard";

const FeaturedProducts = () => {
  return (
    <div>
      <h1 className="text-4xl my-10 text-center text-gray-900">
        Featured Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default FeaturedProducts;
