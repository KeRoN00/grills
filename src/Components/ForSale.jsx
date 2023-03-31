import React, { Suspense } from 'react'
import classes from "./ForSale.module.css"
import { naSprzedarz } from '../Constants/galleryItems'
import Card from '@/UI/Card'
const ForSale = () => {

  const spinner = <div className={classes.ldsspinner}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>;

  return (
    <div className={classes.main}>
      <h1>Modele aktualnie dostępne</h1>
      <div className={classes.list}>
        {naSprzedarz.map(({ id, imgPath }) => (
          <div key={id} className={classes.listitem}>
            <Suspense fallback={spinner}>
              <Card imagePath={imgPath} alt={`na-sprzedarz-${id}`} small />
            </Suspense>
            <div className={classes.number}>{id}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ForSale