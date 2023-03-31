import Image from 'next/image'
import React, { useState } from 'react'
import classes from "./Card.module.css"
const Card = ({ imagePath, small = false }) => {
  const [isLoaded, setIsLoaded] = useState(true);

  const spinner = <div className={classes.ldsspinner}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>;

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className={classes.card} style={{maxWidth: small ? '500px' : '700px'}}>
      <div className={classes.imageContainer}>
        {!isLoaded && spinner}
        <Image
          className={classes.image}
          src={`${imagePath}.jpg`} 
          onLoad={handleLoad} 
          alt={imagePath}
          loading="lazy"
          style={{ display: isLoaded ? 'block' : 'none' }} 
          width={400} 
          height={600} 
          />
      </div>
    </div>
  )
}

export default Card