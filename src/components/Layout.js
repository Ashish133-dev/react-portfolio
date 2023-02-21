import React from "react";
import { Footer } from "./Footer";

import { Header } from "./Header";
import { DarkMode } from "./DarkMode";

const Layout = ({ children }) => {
  return (
    <div>
      {/* <!-- dark mode button --> */}
      <DarkMode />
      <div className="wrapper">
        <Header />
        {children}

        <Footer />
        {/* <Scroll/> */}
      </div>
    </div>
  );
};

export default Layout;
