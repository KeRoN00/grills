import React, { useState } from 'react'
import classes from "./Card.module.css"
const Card = ({imagePath}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className={classes.card}>
      <div className={classes.image}>
        <img src={`${imagePath}.jpg`} alt={imagePath} onLoad={() => setIsLoaded(true)}/>
         
      </div>
    </div>
  )
}

export default Card