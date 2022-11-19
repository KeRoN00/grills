import React from "react";
import classes from "./Gallery.module.css";
import GalleryItem from "./GalleryItem";

const Gallery = () => {
  return (
    <div className={classes.gallery} id="Gallery">
      <div className={classes.carousel}>
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
      </div>
    </div>
  );
};

export default Gallery;
