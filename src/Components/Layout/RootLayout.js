import React from "react";
import Navbar from "../Navbar";

const RootLayout = ({ children }) => {
  return (
    <div className="p-3 md:p-5">
      <Navbar />
      {children}
    </div>
  );
};

export default RootLayout;
