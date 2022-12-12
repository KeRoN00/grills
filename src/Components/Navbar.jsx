
import React from "react";
import LogoPath from "../logo.svg";
import classes from "./Navbar.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

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
        <Link to="/" className={classes.brand}><img src={LogoPath} alt="Logo" />Kominki GL</Link>
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
          <Link to="gallery">Galeria</Link>
        </li>
        <li onClick={handleCloseNavbar}>
          <Link to="forsale">Sprzedarz</Link>
        </li>
        <li onClick={handleCloseNavbar}>
          <Link to="contact">Kontakt</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
