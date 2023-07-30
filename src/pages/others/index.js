import RootLayout from "@/Components/Layout/RootLayout";
import ProductCard from "@/Components/Product/ProductCard";
import React from "react";

const OthersPage = ({ products }) => {
  return (
    <div>
      <h1 className="text-4xl my-10 text-center text-gray-900">Others</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default OthersPage;

OthersPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:5000/all-products?category=Others");
  const products = await res.json();
  return {
    props: {
      products,
    },
  };
}
