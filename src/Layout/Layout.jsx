import React from "react";
import Navbar from "../Components/Navbar";
import styles from "./Layout.module.css"
const Layout = (props) => {
  return (
    <div className={styles.parent}>
      <Navbar />
      <div className={styles.child}>{props.children}</div>
    </div>
  );
};

export default Layout;
