import React from "react";
import { useParams } from "react-router-dom";
import { naSprzedarz } from "../Constants/galleryItems";
import classes from "./ForSaleItem.module.css";
const ForSaleItem = () => {
  const { id } = useParams();
  const { title, imgPath } = naSprzedarz.find((item) => item.id == id);
  return (
    <div className={classes.container}>
      <div className={classes.forsale}>
        <div className={classes.left}>
          <img src={`../${imgPath}.jpg`} alt={`${title}`} />
        </div>
        <div className={classes.right}>
          <p>{id}</p>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default ForSaleItem;
