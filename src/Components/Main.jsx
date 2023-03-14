import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Main.module.css'
const Main = () => {
    return (
        <div className={classes.main}>
            <div>
            <h2>Kontakt</h2>

            <button className={classes.button}><Link to='/gallery'>Zobacz Galerię</Link></button>
            </div>
            </div>
    )
}

export default Main