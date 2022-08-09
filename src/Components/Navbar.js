import React from "react";
import LogoPath from "../icons8-bbb.svg";
import classes from "./Navbar.module.css";


const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.navbarLogo}>
        <img src={LogoPath} alt="Logo" />
        <p>Grzegorz Listwoń</p>
      </div>
      <ul className={classes.navbarlist}>
      <a href="#Gallery"><li className={classes.navlink}>Galeria</li></a>
      <a href="#About"><li className={classes.navlink}>O mnie</li></a>
      <a href="#Contact"><li className={classes.navlink}>Kontakt</li></a>
      </ul>
    </div>
  );
};

export default Navbar;
