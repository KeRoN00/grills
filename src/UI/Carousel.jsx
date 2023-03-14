
import React from 'react'
import classes from "./Carousel.module.css"
import Card from "../UI/Card";
const Carousel = ({title, content}) => {
    return (
    <div className={classes.galleryView} >
        <h1>{title}</h1>
        <div className={classes.carousel}>
        {content.map(zestaw => (
            <Card key={zestaw.id} imagePath={zestaw.imgPath}/>
        ))}
        </div>
    </div>
  )
};

export default Carousel;