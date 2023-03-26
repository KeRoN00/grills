import React from 'react'
import { Link } from 'react-router-dom'
import classes from "./NotFound.module.css"

const NotFound = () => {
  return (
    <div className={classes.main}>
        <h1>Strona nie istnieje  </h1>      
        <Link to='/' className={classes.link}>Wróć na stronę główną</Link>
    </div>
  )
}

export default NotFound