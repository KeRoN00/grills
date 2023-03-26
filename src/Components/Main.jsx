import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Main.module.css'
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
const Main = () => {
    const googleMapsPath = import.meta.env.VITE_ADDRESS;
    const copyPhoneNumberHandler = () => {
        const phone = document.getElementById('phone');
        navigator.clipboard.writeText(phone.textContent);
    }

    return (
        <div className={classes.main}>
            <Link to='/galeria' className={classes.button}>Zobacz Galerię</Link>
            <div className={classes.contact}>
                <p onClick={() => copyPhoneNumberHandler()}><FaPhoneAlt color='white' className={classes.icon} />Tel: <span id="phone">691 945 111</span></p>
                <p><a href={googleMapsPath} target='_blank' className={classes.link}><FaMapMarkerAlt color='white' className={classes.icon} /><div><span>44-266 Świerklany,&nbsp;</span><br/> <span>ul. Słoneczna 14</span></div></a></p>
            </div>
        </div>
    )
}

export default Main