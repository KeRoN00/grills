import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Main.module.css'
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
const Main = () => {
    const googleMapsPath = import.meta.env.VITE_ADDRESS;
    const copyPhoneNumberHandler = () => {
        const phone = document.getElementById('phone');
        navigator.clipboard.writeText(phone.textContent);
        alert('Skopiowano numer telefonu');
    }

    return (
        <div className={classes.main}>
            <Link to='/galeria' className={classes.button} >Zobacz Galerię</Link>
            <div className={classes.contact}>
                <p onClick={() => copyPhoneNumberHandler()}><FaPhoneAlt color='white' className={classes.icon} />Tel: <span id="phone">691 945 111</span></p>
                <p><a href={googleMapsPath} target='_blank'><FaMapMarkerAlt color='white' className={classes.icon} />44-266 Świerklany, <span>ul. Słoneczna 14</span></a></p>

            </div>
        </div>
    )
}

export default Main