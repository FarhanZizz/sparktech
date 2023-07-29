import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const RootLayout = ({ children }) => {
  return (
    <div className="px-2 pt-4 md:px-5">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;
