import RootLayout from "@/Components/Layout/RootLayout";
import ProductCard from "@/Components/Product/ProductCard";
import React from "react";

const CpuPage = () => {
  return (
    <div>
      <h1 className="text-4xl my-10 text-center text-gray-900">Processors</h1>
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

export default CpuPage;

CpuPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
