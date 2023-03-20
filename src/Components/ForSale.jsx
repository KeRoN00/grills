import React from 'react'
import classes from "./ForSale.module.css"
import { naSprzedarz } from '../Constants/galleryItems'
const ForSale = () => {
  return (
    <div className={classes.main}>
      <h1>Modele aktualnie dostępne</h1>
      <div className={classes.list}>
        {naSprzedarz.map(({ id, imgPath, title }) => (
          <div key={id} className={classes.listitem}>
            <img src={`${imgPath}.jpg`} />
            <div className={classes.description}>
              <h3>{title}</h3>
              <p>Numer: {id}</p>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default ForSale