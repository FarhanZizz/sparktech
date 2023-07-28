import React from "react";
import Navbar from "./Navbar";

const RootLayout = ({ children }) => {
  return (
    <div className="px-2 pt-4 md:px-5">
      <Navbar />
      {children}
    </div>
  );
};

export default RootLayout;
