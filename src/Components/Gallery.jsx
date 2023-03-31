import React, { lazy, Suspense } from "react";
import { zestawyMale, zestawyDuze, bioKominki } from "../Constants/galleryItems";
import classes from './Gallery.module.css'


const Carousel = lazy(()=> import('../UI/Carousel'));
const Gallery = () => {

  const spinner = <div className={classes.ldsspinner}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>;

  return (
    <div className={classes.gallery}>
      <div className={classes.background} />
      <Suspense fallback={spinner} >
        <Carousel title="Zestawy 5w1" content={zestawyMale} />
      </Suspense>
      <Suspense fallback={spinner} >
        <Carousel title="Zestawy 7w1" content={zestawyDuze} />
      </Suspense>
      <Suspense fallback={spinner} >
        <Carousel title="Biokominki" content={bioKominki} />
      </Suspense>
    </div>
  );
};

export default Gallery;
