import FeaturedCategories from "@/Components/Home/FeaturedCategories";
import FeaturedProducts from "@/Components/Home/FeaturedProducts";
import Hero from "@/Components/Home/Hero";
import RootLayout from "@/Components/Layout/RootLayout";
import ProductCard from "@/Components/Product/ProductCard";
import StarRating from "@/Components/Product/StarRating";
import React from "react";

const HomePage = ({ products }) => {
  return (
    <div>
      <Hero />
      <FeaturedProducts products={products} />
      <FeaturedCategories />
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:5000/featured-products");
  const products = await res.json();
  return {
    props: {
      products,
    },
  };
}
