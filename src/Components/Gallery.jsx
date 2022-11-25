import React  from "react";
import classes from "./Gallery.module.css";
import Card from "../UI/Card";

const Gallery = () => {
 
  //console.log(liczba);
  return (
    <div className={classes.gallery} id="Gallery">
      <div className={classes.carousel}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Gallery;
