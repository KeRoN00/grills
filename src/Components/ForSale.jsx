import React from 'react'
import classes from "./ForSale.module.css"
import { naSprzedarz } from '../Constants/galleryItems'
import Image from '../UI/Image'
const ForSale = () => {
  return (
    <div className={classes.main}>
      <h1>Modele aktualnie dostępne</h1>
      <div className={classes.list}>
        {naSprzedarz.map(({ id, imgPath }) => (
          <div key={id} imagepath ={imgPath} className={classes.listitem}>
            <Image imgPath={imgPath} alt={`na-sprzedarz-${id}`}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ForSale