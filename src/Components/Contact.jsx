import React from "react";
import classes from "./Contact.module.css";

const Contact = () => {

  return (
    <div className={classes.contact}>
      <h1>Kontakt</h1>
      <div className={classes.content}>
        <div className={classes.left}>
          <div>
            <h3>Telefon</h3>
            <p>+48 691 945 111</p>
          </div>
          <div>
            <h3>Adres</h3>
            <p>Świerklany </p>
            <p>ul. Słoneczna 14</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
