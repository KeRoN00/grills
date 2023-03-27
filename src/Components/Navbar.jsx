
import React from "react";
import LogoPath from "../logo.svg";
import classes from "./Navbar.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const handleToggleButton = () => {
    setIsVisible(!isVisible);
  };

  const handleCloseNavbar = () => {
    setIsVisible(false);
  };
  
  return (
    <div className={classes.navbar}>
      <div className={classes.navbarInfo}>
        <Link onClick={handleCloseNavbar} to="/" className={classes.brand}><img src={LogoPath} alt="Logo" />Kominki GL</Link>
      </div>
      <div className={classes.toggleBtn} onClick={handleToggleButton} >
        <span className={classes.bar}></span>
        <span className={classes.bar}></span>
        <span className={classes.bar}></span>
      </div>
      <ul
        className={`${classes.navbarlinks} ${isVisible && classes.expanded} ${!isVisible && classes.open}`}
        >
        <li onClick={handleCloseNavbar}>
          <Link to="galeria">Galeria</Link>
        </li>
        <li onClick={handleCloseNavbar}>
          <Link to="na-sprzedarz">Sprzedarz</Link>
        </li>

        <li onClick={handleCloseNavbar}>
          <Link to="info">O mnie</Link>
        </li>

      </ul>
    </div>
  );
};

export default Navbar;
