
import React, { useState, useRef, Suspense } from 'react'
import classes from "./Carousel.module.css"
import Card from "../UI/Card";
const Carousel = ({ title, content }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  const spinner = <div className={classes.ldsspinner}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>;


  const galleryRef = useRef(null);
  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartX(event.pageX - galleryRef.current.offsetLeft);
    setScrollLeft(galleryRef.current.scrollLeft);
  }

  const handleMouseMove = (event) => {
    event.preventDefault();
    if (!isDragging) return;
    const x = event.pageX - galleryRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    galleryRef.current.scrollLeft = scrollLeft - walk;
  }

  const handleMouseUp = () => {
    setIsDragging(false);
  }


  return (
    <div className={classes.galleryView}>
      <h1>{title}</h1>
      <div className={classes.carousel} ref={galleryRef} onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp} 
       >
        <Suspense fallback={spinner}>

            {content.map(zestaw => (
              <Card key={zestaw.id} imagePath={zestaw.imgPath} />
              ))}
              </Suspense>
      </div>
    </div>
  )
};

export default Carousel;