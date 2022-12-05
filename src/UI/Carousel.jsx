
import React from 'react'
import classes from "./Carousel.module.css"
import Card from "../UI/Card";
import {zestawyMale} from "../Constants/galleryItems"
const Carousel = ({content}) => {
    return (
    <div className={classes.carousel}>
        {content.map(zestaw => (
            <Card key={zestaw.id} imagePath={zestaw.imgPath}/>
        ))}
    </div>
  )
};

export default Carousel;