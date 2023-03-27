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
                <div>
                    <a href={googleMapsPath} target='_blank' className={classes.link}>
                        <FaMapMarkerAlt color='white' className={classes.icon} />
                        <div className={classes.address}>
                            <p>44-266 Świerklany,&nbsp;</p>
                            <p>ul. Słoneczna 14</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Main