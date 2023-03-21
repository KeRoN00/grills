import React, { useCallback, useState } from 'react'
import classes from './Image.module.css'

const Image = ({ imgPath, alt }) => {
    const [isLoaded, setIsLoaded] = useState(false);


    const spinner = <div className={classes.ldsspinner}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>;

    const handleLoad = () => {
        setIsLoaded(true);
    };
    return (
        <div className={classes.imageContainer}>
            {!isLoaded && spinner}
            <img src={`${imgPath}.jpg`} alt={alt} onLoad={handleLoad} style={{display: isLoaded ? 'block' : 'none'}}/>
        </div>
    )
}

export default Image