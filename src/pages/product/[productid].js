import RootLayout from "@/Components/Layout/RootLayout";
import StarRating from "@/Components/Product/StarRating";
import Image from "next/image";
import React from "react";

const ProductDetails = ({ product }) => {
  return (
    <div>
      <h1 className="text-4xl mt-10 text-center text-gray-900">
        Product Details
      </h1>
      <div className="flex flex-col md:flex-row">
        <Image
          alt="product"
          src={product.Image}
          width={100}
          height={100}
          className="max-w-lg mx-auto"
          layout="responsive"
        ></Image>
        <div className="md:mt-14">
          <h1 className="text-2xl mt-10 text-gray-900">
            {product["Product Name"]}
          </h1>
          <div className=" flex flex-col md:flex-row gap-5 my-5 items-center">
            <div className="flex gap-4">
              <span className="text-3xl font-bold text-gray-900">
                ${product.Price}
              </span>

              <div className="flex items-center gap-2">
                <StarRating averageRating={product["Average Rating"]} />
              </div>
            </div>
            <div className="flex gap-2">
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
          <p className="text-gray-500  text-xl">{product.Description}</p>

          <div className="overflow-x-auto mt-5">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Brand</th>
                  <th>Model</th>
                  <th>Specification</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <td>{product["Key Features"].Brand}</td>
                  <td>{product["Key Features"].Model}</td>
                  <td>{product["Key Features"].Specification}</td>
                </tr>
              </tbody>
            </table>
            {product.Reviews.length && (
              <div className="grid grid-cols-1 w-full gap-4 my-5">
                <span className="text-xl text-gray-900">Reviews:</span>
                {product.Reviews.map((review, index) => (
                  <div key={index} className="bg-base-200 px-5 py-3 rounded-lg">
                    <span className="text-sm text-primary">
                      Rating: {review.Rating} stars
                    </span>
                    <h1 className="text-lg">{review.Comment}</h1>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

// This function gets called at build time
export async function getStaticPaths() {
  const res = await fetch("https://sparktech-server.vercel.app/all-products");
  const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { productid: post._id }, // Use "productid" instead of "id"
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // params contains the product `productid`.
  // If the route is like /products/1, then params.productid is 1
  const res = await fetch(
    `https://sparktech-server.vercel.app/product/${params.productid}`
  );
  const product = await res.json();

  // Pass product data to the page via props
  return { props: { product } };
}
