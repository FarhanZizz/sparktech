import RootLayout from "@/Components/Layout/RootLayout";
import React from "react";

const PcBuilderPage = () => {
  return <div>this is pc builder oage</div>;
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
