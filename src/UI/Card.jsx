import React from 'react'
import classes from "./Card.module.css"
import image from "../Assets/zdj.jpg"
const Card = () => {
  return (
    <div className={classes.card}>
      <div className={classes.image}>
         <img src={image} alt="zdjecie" />
      </div>
      <div className={classes.description}>
      info

      </div>
    </div>
  )
}

export default Card