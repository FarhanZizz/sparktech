import RootLayout from "@/Components/Layout/RootLayout";
import StarRating from "@/Components/Product/StarRating";
import Image from "next/image";
import React from "react";

const ProductDetails = () => {
  return (
    <div>
      <h1 className="text-4xl mt-10 text-center text-gray-900">
        Product Details
      </h1>
      <div className="flex flex-col md:flex-row">
        <Image
          src="https://www.cloud.ryanscomputers.com/cdn/products/medium/mi-curved-34-inch-wqhd-3440x1440-gaming-monitor-11602570977.webp"
          width={100}
          height={100}
          className="max-w-lg mx-auto"
          layout="responsive"
        ></Image>
        <div className="md:mt-14">
          <h1 className="text-2xl mt-10 text-gray-900">
            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
          </h1>
          <div className=" flex flex-col md:flex-row gap-5 my-5 items-center">
            <div className="flex gap-4">
              <span class="text-3xl font-bold text-gray-900">$599</span>

              <div className="flex items-center gap-2">
                <StarRating averageRating={2.3} />
              </div>
            </div>
            <div className="flex gap-2">
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
          <p className="text-gray-500  text-xl">
            High-performance 9th generation Intel processor for gaming and
            multitasking
          </p>

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
                  <td>GIGABYTE</td>
                  <td>B550 AORUS Elite</td>
                  <td>
                    16 cores, 32 threads, 3.4GHz base clock, 4.9GHz boost clock
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="grid grid-cols-1 w-full gap-4 my-5">
              <span className="text-xl text-gray-900">Reviews:</span>
              <div className="bg-base-200 px-5 py-3 rounded-lg">
                <span className="text-sm text-primary">Rating: 2.5</span>
                <h1 className="text-lg">
                  Amazing processor, great for gaming!
                </h1>
              </div>
            </div>
            {/* <div className="grid grid-cols-1 w-full gap-4">
              {allreviews.length ? (
                allreviews.map(
                  (review: { username: string, review: string }, index) => (
                    <div
                      key={index}
                      className="bg-base-200 px-5 py-3 rounded-lg"
                    >
                      <span className="text-sm text-primary">
                        {review.username}
                      </span>
                      <h1 className="text-lg">{review.review}</h1>
                    </div>
                  )
                )
              ) : (
                <div className="bg-base-200 p-5 rounded-lg">
                  <h1 className="text-lg text-center">No Reviews Yet!</h1>
                </div>
              )}
            </div> */}
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
