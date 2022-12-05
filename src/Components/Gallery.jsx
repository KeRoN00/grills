import React  from "react";
import classes from "./Gallery.module.css";
import Carousel from "../UI/Carousel";
import { zestawyMale, zestawyDuze } from "../Constants/galleryItems";

const Gallery = () => {
  return (
    <div className={classes.gallery}>
      <Carousel content={zestawyMale} />
      <Carousel content={zestawyDuze} />
    </div>
  );
};

export default Gallery;
