import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Main.module.css'
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
const googleMapsPath = 'https://www.google.com/maps/place/S%C5%82oneczna+14,+44-266+%C5%9Awierklany/@50.0315346,18.594392,17z/data=!3m1!4b1!4m6!3m5!1s0x47114dbfd40b042d:0xd8e0dcefbb35ead4!8m2!3d50.0315346!4d18.5965807!16s%2Fg%2F11c5fr75yc?hl=pl-PL'
const Main = () => {
    return (
        <div className={classes.main}>
           <Link to='/gallery' className={classes.button} >Zobacz Galerię</Link>
            <div className={classes.contact}>
                <p><FaPhoneAlt color='white' className={classes.icon} />Tel: 691 945 111</p>
                <p className={classes.address}><a href={googleMapsPath} target='_blank'><FaMapMarkerAlt color='white' className={classes.icon}/>44-266 Świerklany, <span>ul. Słoneczna 14</span></a></p>

            </div>
        </div>
    )
}

export default Main