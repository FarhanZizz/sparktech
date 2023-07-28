import RootLayout from "@/Components/Layout/RootLayout";
import React from "react";

const index = () => {
  return <div>DAD</div>;
};

export default index;

index.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
