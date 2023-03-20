import React from 'react'
import classes from "./Card.module.css"
const Card = ({imagePath}) => {
  return (
    <div className={classes.card}>
      <div className={classes.image}>
        <img src={`${imagePath}.jpg`} alt={imagePath}/>
         
      </div>
    </div>
  )
}

export default Card