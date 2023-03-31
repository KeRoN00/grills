import React from 'react'
import Link from 'next/link'
import classes from './Main.module.css'
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
const Main = () => {
    const googleMapsPath = 'https://www.google.com/maps/place/S%C5%82oneczna+14,+44-266+%C5%9Awierklany/@50.0315346,18.5965807,17z/data=!3m1!4b1!4m6!3m5!1s0x47114dbfd40b042d:0xd8e0dcefbb35ead4!8m2!3d50.0315346!4d18.5965807!16s%2Fg%2F11c5fr75yc?hl=pl-PL';
    const copyPhoneNumberHandler = () => {
        const phone = document.getElementById('phone');
        navigator.clipboard.writeText(phone.textContent);
    }
      

    return (
        <div className={classes.main}>
            <Link href='/galeria' className={classes.button}>Zobacz Galerię</Link>
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