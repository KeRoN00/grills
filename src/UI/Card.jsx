import React from 'react'
import classes from "./GalleryItem.module.css"
const Card = () => {
  return (
    <div className={classes.card}>
      <div className={classes.image}>
         zdjecie
      </div>
      <div className={classes.description}>
      info

      </div>
    </div>
  )
}

export default Card