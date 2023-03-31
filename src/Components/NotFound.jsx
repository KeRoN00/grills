import React from 'react'
import Link from "next/link";
import classes from "./NotFound.module.css"

const NotFound = () => {
  return (
    <div className={classes.main}>
        <h1>Strona nie istnieje  </h1>      
        <Link href='/' className={classes.link}>Wróć na stronę główną</Link>
    </div>
  )
}

export default NotFound