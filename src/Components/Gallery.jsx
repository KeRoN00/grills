import React  from "react";
import Carousel from "../UI/Carousel";
import { zestawyMale, zestawyDuze, bioKominki } from "../Constants/galleryItems";
import classes from './Gallery.module.css'
const Gallery = () => {
  return (
    <div className={classes.gallery}>
      <Carousel title="Zestawy 5w1" content={zestawyMale} />
      <Carousel title="Zestawy 7w1" content={zestawyDuze} />
      <Carousel title="Biokominki" content={bioKominki} />
    </div>
  );
};

export default Gallery;
