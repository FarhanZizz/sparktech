import RootLayout from "@/Components/Layout/RootLayout";
import ProductCard from "@/Components/ProductCard";
import StarRating from "@/Components/StarRating";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-y-14">
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

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
