/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import LogoPath from "../logo.svg";
import classes from "./Navbar.module.css";
import { useState } from "react";

const Navbar = () => {
  const [navButton, setNavButton] = useState(false);
  const handleToggleButton = () => {
    setNavButton(!navButton);
  };
  const handleCloseNavbar = () => {
    setNavButton(false);
  };
  return (
    <div className={classes.navbar}>
      <div className={classes.navbarInfo}>
        <img src={LogoPath} alt="Logo" />
        <div className={classes.brand}>Kominki GL</div>
      </div>
      <div className={classes.toggleBtn} onClick={handleToggleButton}>
        <span className={classes.bar}></span>
        <span className={classes.bar}></span>
        <span className={classes.bar}></span>
      </div>
      <ul
        className={`${classes.navbarlinks} ${navButton ? classes.expanded : ''}`}

      >
        <li onClick={handleCloseNavbar}>
          <a href="#">Galeria</a>
        </li>
        <li onClick={handleCloseNavbar}>
          <a href="#About">Info</a>
        </li>
        <li onClick={handleCloseNavbar}>
          <a href="#Contact">Kontakt</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
