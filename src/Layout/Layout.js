import React from "react";
import Navbar from "../Components/Navbar";

const Layout = (props) => {
  return (
    <>
      <Navbar />
      <div>{props.children}</div>
    </>
  );
};

export default Layout;
