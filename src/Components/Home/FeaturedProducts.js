import React from "react";
import ProductCard from "../Product/ProductCard";

const FeaturedProducts = ({ products }) => {
  return (
    <div>
      <h1 className="text-4xl my-10 text-center text-gray-900">
        Featured Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
