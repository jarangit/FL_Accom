import React from "react";
import Filter_bar from "./filter";
import Footer from "./footer";
import Menu from "./menu";

const Layout = ({ children }) => {
  return (
    <div>
      <Menu />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
