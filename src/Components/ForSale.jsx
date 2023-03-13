import React from 'react'
import classes from "./ForSale.module.css"
import { naSprzedarz } from '../Constants/galleryItems'
import { Link } from 'react-router-dom'
const ForSale = () => {
  return (
    <div className={classes.main}>
    <h1>Modele aktualnie dostępne</h1>
    <div className={classes.list}>
        {naSprzedarz.map(({id, imgPath, title }) => (
        <div key={id} className={classes.listitem}>
            <img src={`${imgPath}.jpg`} />
            <div className={classes.deco}/>
            <div className={classes.description}>
                <h3>{title}</h3>
                <p>Numer: {id}</p>
                <p><Link to={`/forsale/${id}`}>Więcej info</Link></p>
            </div>
        </div>
        ))}
    </div>
    </div>
  )
}

export default ForSale