import React  from "react";
import classes from "./Gallery.module.css";
import GalleryItem from "./GalleryItem";

const Gallery = () => {
 
  //console.log(liczba);
  return (
    <div className={classes.gallery} id="Gallery">
      <div className={classes.carousel} data-simplebar
      
      >
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
