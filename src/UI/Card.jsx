import React from 'react'
import classes from "./Card.module.css"
import Image from './Image'
const Card = ({imagePath}) => {
  return (
    <div className={classes.card}>
      <Image imgPath={imagePath} alt={imagePath} />
    </div>
  )
}

export default Card